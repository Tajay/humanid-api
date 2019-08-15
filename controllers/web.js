'use strict'

const BaseController = require('./base'),
    router = require('express').Router()

const CONFIRMATION_EXPIRY_MS = 30000

class WebController extends BaseController {
    constructor(models, common) {
        super(models)
        
        /**
         * @api {post} /web/users/login Login
         * @apiName Login
         * @apiGroup Web
         * @apiDescription <p>Send login push notification to one of mobile app.
         * The notification contains data: <code>{"type": "WEB_LOGIN_REQUEST", "requestingAppId": "APP_ID"}</code>
         * Where <code>type</code> always be <code>WEB_LOGIN_REQUEST</code>, 
         * and <code>requestingAppId</code> is the ID of the app that requests login</p>
         *
         * @apiParam {String} countryCode User mobile phone country code (eg. 62 for Indonesia)
         * @apiParam {String} phone User mobile phone number
         * @apiParam {String} appId Partner app ID
         * @apiParam {String} appSecret Partner app secret
         *
         * @apiSuccess (202) {String} appId Partner app ID
         * @apiSuccess (202) {String} status <code>PENDING</code>
         * 
         * @apiSuccess (200) {String} appId Partner app ID
         * @apiSuccess (200) {String} status <code>CONFIRMED</code>
         * 
         */
        router.post('/users/login', async (req, res, next) => {
            let body = req.body
            let error = this.validate({
                countryCode: 'required', 
                phone: 'required', 
                appId: 'required', 
                appSecret: 'required', 
            }, body)
            if (error) {
                return res.status(400).send(error)
            }
                
            let user = null
            let app = null
            try {
                let hash = common.hmac(`${body.countryCode}${body.phone}`)
                user = await models.User.findOne({where: {hash: hash}, include: models.AppUser})
                if (!user) throw new Error(`Account not found: (${body.countryCode}) ${body.phone}`)   
                app = await this.validateAppCredentials(body.appId, body.appSecret)
            } catch (e) {
                return res.status(401).send(e.message)
            }
            
            let confirmationData = {
                type: models.Confirmation.TypeCode.WEB_LOGIN_REQUEST,
                appId: app.id,
                userId: user.id,
                status: models.Confirmation.StatusCode.PENDING,
                updatedAt: new Date(),
                messageId: null,
            }
            let confirmation = null
            try {        
                // check confirmation
                confirmation = await models.Confirmation.findOne({
                    where: {
                        type: confirmationData.type,
                        appId: app.id,
                        userId: user.id,
                    }
                })
            
                if (confirmation) {                 
                    if (confirmation.status === models.Confirmation.StatusCode.CONFIRMED
                        || new Date() - confirmation.updatedAt < CONFIRMATION_EXPIRY_MS) {
                        // if Confirmed or not yet expired,
                        // send the confirmation object (containing status)
                        let code = confirmation.status === models.Confirmation.StatusCode.CONFIRMED ? 200 : 202
                        return res.status(code).send(confirmation)
                    } else {
                        // if Pending and expired update updatedAt
                        confirmation.updatedAt = new Date()
                        await confirmation.save()
                        // sync data for push notif
                        confirmationData.updatedAt = confirmation.updatedAt   
                    }
                }        
            } catch (e) {
                return res.status(500).send(e.message)
            }
                                    
            // try to send push notif to each apps                
            let i = 0
            let results = []
            while (!confirmationData.messageId && i < user.AppUsers.length) {
                let appUser = user.AppUsers[i] 
                try {                                       
                    if (appUser.notifId) {                        
                        confirmationData.messageId = await common.firebase.messaging().send({
                            token: appUser.notifId,
                            data: {
                                type: confirmationData.type,
                                requestingAppId: confirmationData.appId,
                                updatedAt: confirmationData.updatedAt.toISOString(),
                            },
                        })                        
                        results.push({appId: appUser.appId, success: true, reason: null})
                    } else {
                        results.push({appId: appUser.appId, success: false, reason: 'Missing notifId'})
                    }            
                } catch (e) {
                    results.push({appId: appUser.appId, success: false, reason: `Push notif failed: ${e.message}`})
                } finally {
                    i++
                }        
            }

            // message not sent
            if (!confirmationData.messageId) {
                console.error(results)
                return res.status(500).send({results: results})
            }            
            try {
                // create confirmation object
                // to be updated by mobile app
                if (!confirmation) {
                    confirmation = await models.Confirmation.create(confirmationData)
                }        
                return res.status(202).send(confirmation)
            } catch (e) {
                return res.status(500).send(e.message)
            }
        })

        /**
         * @api {post} /web/users/confirm Confirm
         * @apiName Confirm
         * @apiGroup Web
         * @apiDescription Confirm web login
         *
         * @apiParam {String} hash User hash (unique authentication code) of confirming app
         * @apiParam {String} requestingAppId App ID that requests confirmation
         * @apiParam {String} [type] Confirmation type eg. <code>WEB_LOGIN_REQUEST</code>
         * @apiParam {String} appId Partner app ID
         * @apiParam {String} appSecret Partner app secret
         *
         * @apiSuccess {String} message
         * 
         */
        router.post('/users/confirm', async (req, res, next) => {
            let body = req.body
            let error = this.validate({
                hash: 'required', 
                requestingAppId: 'required', 
                appId: 'required', 
                appSecret: 'required', 
            }, body)
            if (error) {
                return res.status(400).send(error)
            }    

            // default to models.Confirmation.TypeCode.WEB_LOGIN_REQUEST
            body.type = body.type || models.Confirmation.TypeCode.WEB_LOGIN_REQUEST

            let appUser = null
            try {
                appUser = await this.validateAppUserCredentials(body.hash, body.appId, body.appSecret)        
            } catch (e) {
                return res.status(401).send(e.message)
            }

            // find Confirmation
            let confirmation = null
            try {
                confirmation = await models.Confirmation.findOne({where: {
                    type: body.type,
                    appId: body.requestingAppId,
                    userId: appUser.userId,
                }})
                if (!confirmation) {
                    return res.status(404).send('Confirmation not found')
                }
                if (confirmation.status === models.Confirmation.StatusCode.CONFIRMED) {
                    return res.status(403).send('Already confirmed')
                } else {
                    // update Confirmation status
                    confirmation.status = models.Confirmation.StatusCode.CONFIRMED
                    await confirmation.save()
                }        
                return res.send(confirmation)
            } catch (e) {
                return res.status(500).send(e.message)
            }    
        })

        this.router = router
    }
}

module.exports = WebController