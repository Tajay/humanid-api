define({ "api": [
  {
    "type": "post",
    "url": "/web/users/confirm",
    "title": "Confirm",
    "name": "Confirm",
    "group": "Mobile",
    "description": "<p>Confirm web login</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>User hash (unique authentication code) of confirming app</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestingAppId",
            "description": "<p>App ID that requests confirmation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Confirmation type eg. <code>WEB_LOGIN_REQUEST</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSecret",
            "description": "<p>Partner app secret</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Confirmation ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Requesting App ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Confirmation type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "confirmingAppId",
            "description": "<p>Confirming App ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/web.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "post",
    "url": "/mobile/users/login",
    "title": "User login",
    "name": "LoginUser",
    "group": "Mobile",
    "description": "<p>User login to new partner app using existing hash</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "existingHash",
            "description": "<p>User existing app hash</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notifId",
            "description": "<p>Push notif ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSecret",
            "description": "<p>Partner app secret</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/mobile.js",
    "groupTitle": "Mobile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>User hash (unique authentication code) for given app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>User unique authentication code for given app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifId",
            "description": "<p>Push notif ID</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/mobile/users/login",
    "title": "Login check",
    "name": "LoginUserCheck",
    "group": "Mobile",
    "description": "<p>Check if user still logged-in (hash is still valid)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>User app hash</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSecret",
            "description": "<p>Partner app secret</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/mobile.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "post",
    "url": "/mobile/users/register",
    "title": "User registration",
    "name": "RegisterUser",
    "group": "Mobile",
    "description": "<p>New user registration</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>User mobile phone country code (eg. 62 for Indonesia)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User mobile phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>User device ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verificationCode",
            "description": "<p>User phone number verification code (OTP)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notifId",
            "description": "<p>Push notif ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSecret",
            "description": "<p>Partner app secret</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/mobile.js",
    "groupTitle": "Mobile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>User hash (unique authentication code) for given app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>User unique authentication code for given app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifId",
            "description": "<p>Push notif ID</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/web/users/reject",
    "title": "Reject",
    "name": "Reject",
    "group": "Mobile",
    "description": "<p>Reject or revoke web login</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>User hash (unique authentication code) of confirming app</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestingAppId",
            "description": "<p>App ID that requests confirmation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Confirmation type eg. <code>WEB_LOGIN_REQUEST</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSecret",
            "description": "<p>Partner app secret</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Confirmation ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Requesting App ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Confirmation type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "confirmingAppId",
            "description": "<p>Confirming App ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/web.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "put",
    "url": "/mobile/users",
    "title": "Update",
    "name": "Update",
    "group": "Mobile",
    "description": "<p>Update notif ID</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notifId",
            "description": "<p>Push notif ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>User app hash</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSecret",
            "description": "<p>Partner app secret</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/mobile.js",
    "groupTitle": "Mobile",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>User hash (unique authentication code) for given app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deviceId",
            "description": "<p>User unique authentication code for given app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifId",
            "description": "<p>Push notif ID</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/mobile/users/updatePhone",
    "title": "Update phone",
    "name": "UpdatePhone",
    "group": "Mobile",
    "description": "<p>Update phone number of logged-in account and, consequently, invalidate login from old phone number</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>User new mobile phone country code (eg. 62 for Indonesia)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User new mobile phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verificationCode",
            "description": "<p>User new phone number verification code (OTP)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "existingHash",
            "description": "<p>User existing app hash</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSecret",
            "description": "<p>Partner app secret</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/mobile.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "post",
    "url": "/mobile/users/verifyPhone",
    "title": "Verify phone",
    "name": "VerifyPhone",
    "group": "Mobile",
    "description": "<p>Trigger OTP SMS code</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>User mobile phone country code (eg. 62 for Indonesia)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User mobile phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSecret",
            "description": "<p>Partner app secret</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/mobile.js",
    "groupTitle": "Mobile"
  },
  {
    "type": "post",
    "url": "/console/apps",
    "title": "App registration",
    "name": "CreateApp",
    "group": "WebConsole",
    "description": "<p>New (partner) app registration</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer accessToken</code></p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Application ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Application ID (must be unique 5-20 characters alphanumeric)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secret",
            "description": "<p>Secret code to invoke secured API</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Platform <code>{'ANDROID', 'IOS'}</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "serverKey",
            "description": "<p>Firebase Cloud Messaging Server Key</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "urls",
            "description": "<p>Whitelisted domain URLs for web client (comma-separated). Example: <code>https://foo.com,https://bar.com</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/webconsole.js",
    "groupTitle": "WebConsole"
  },
  {
    "type": "get",
    "url": "/console/apps",
    "title": "App list",
    "name": "ListApps",
    "group": "WebConsole",
    "description": "<p>Get list of registered (partner) apps</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer accessToken</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "pages",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/webconsole.js",
    "groupTitle": "WebConsole"
  },
  {
    "type": "get",
    "url": "/console/users",
    "title": "User list",
    "name": "ListUser",
    "group": "WebConsole",
    "description": "<p>Get list of registered users</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p><code>Bearer accessToken</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "pages",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/webconsole.js",
    "groupTitle": "WebConsole"
  },
  {
    "type": "post",
    "url": "/console/login",
    "title": "Login",
    "name": "login",
    "group": "WebConsole",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/webconsole.js",
    "groupTitle": "WebConsole"
  },
  {
    "type": "post",
    "url": "/web/users/login",
    "title": "Login",
    "name": "Login",
    "group": "Web",
    "description": "<p>Attempt to login by phone number. If not authorized, request confirmation based on <code>type</code>:</p> <p>1. <code>app</code>: Send login push notification to one of mobile app: <code>{\"type\": \"WEB_LOGIN_REQUEST\", \"requestingAppId\": \"APP_ID\"}</code> where <code>type</code> always be <code>WEB_LOGIN_REQUEST</code>, and <code>requestingAppId</code> is the ID of the app that requests login</p> <p>2. <code>otp</code>: Send SMS containing OTP code to phone number (if already registered)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Auth type <code>{'app','otp'}</code>. Default: <code>'app'</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>User mobile phone country code (eg. 62 for Indonesia)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User mobile phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "verificationCode",
            "description": "<p>User phone number verification code (OTP)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSecret",
            "description": "<p>Partner app secret</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>session ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>CONFIRMED</code></p>"
          }
        ],
        "202": [
          {
            "group": "202",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "202",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>session ID</p>"
          },
          {
            "group": "202",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>PENDING</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/web.js",
    "groupTitle": "Web"
  },
  {
    "type": "post",
    "url": "/web/users/logout",
    "title": "Logout",
    "name": "Logout",
    "group": "Web",
    "description": "<p>Revoke web login session</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>Obtained from login response</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSecret",
            "description": "<p>Partner app secret</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/web.js",
    "groupTitle": "Web"
  },
  {
    "type": "get",
    "url": "/web/users/status",
    "title": "Status",
    "name": "Status",
    "group": "Web",
    "description": "<p>Check login status by <code>sessionId</code> from server-side/backend</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>Obtained from login response</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appSecret",
            "description": "<p>Partner app secret</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>session ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>CONFIRMED</code></p>"
          }
        ],
        "202": [
          {
            "group": "202",
            "type": "String",
            "optional": false,
            "field": "appId",
            "description": "<p>Partner app ID</p>"
          },
          {
            "group": "202",
            "type": "String",
            "optional": false,
            "field": "sessionId",
            "description": "<p>session ID</p>"
          },
          {
            "group": "202",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>PENDING</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "controllers/web.js",
    "groupTitle": "Web"
  }
] });
