const self = module.exports = {
    dbCons: require('../constants/db-constant'),
    msgCons: require('../constants/msg-constant'),
    httpStatusCodes: require('http-status-codes'),
    httpContext: require('express-http-context'),
    _lodash: require('lodash'),

    responseGenerators: function (responseData, responseStatusCode, responseStatusMsg, responseErrors) {
        var responseJson = {}
        responseJson['data'] = responseData
        responseJson['status_code'] = responseStatusCode
        responseJson['status_message'] = responseStatusMsg

        // errors
        if (responseErrors === undefined) {
            responseJson['response_error'] = []
        } else {
            responseJson['response_error'] = responseErrors
        }

        return responseJson
    },

    checkValidEmail: function (email) {
        // eslint-disable-next-line no-useless-escape
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    },

    swapJsonKeyToValue: (json) => {
        const response = {}
        for (let key in json) {
            response[json[key]] = key
        }
        return response
    },

    mergeJsons: function (a, b) {
        if (a && b) {
            for (var key in b) {
                a[key] = b[key]
            }
        }
        return a
    },

    errorObjectGenrator: function (code, msg) {
        var responseJson = {}
        // CODE
        if (typeof code === 'undefined') {
            responseJson['error_code'] = 500
        } else {
            responseJson['error_code'] = code
        }

        // MSG
        if (msg === undefined) {
            responseJson['error_message'] = self.msgCons.MSG_ERROR_SERVER_ERROR
        } else {
            responseJson['error_message'] = msg
        }

        return responseJson
    },

    isEmpty (object) {
        for (var key in object) {
            // eslint-disable-next-line no-prototype-builtins
            if (object.hasOwnProperty(key)) {
                return false
            }
        }
        return true
    },

    convertIntoArray: function (jsonObject) {
        if (!Array.isArray(jsonObject)) {
            return [jsonObject]
        }
        return jsonObject
    },
}