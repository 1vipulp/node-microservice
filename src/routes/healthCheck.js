'use strict'

const router = require('express').Router()

router.get('/', (req, res) => {
    return res.send({
        msg: 'Service Health Check Success!'
    })
})

module.exports = router