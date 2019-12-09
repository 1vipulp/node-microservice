'use strict'

const healthCheckRoute = require('./healthCheck')
const userRoute = require('./user')

module.exports = (app) => {
    app.use('/', healthCheckRoute)
    app.use('/user', userRoute)
}