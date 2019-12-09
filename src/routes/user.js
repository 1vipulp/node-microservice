'use strict'

const router = require('express').Router()
const userController = require('../controllers/user')

router.post('/add', userController.addUser)

module.exports = router