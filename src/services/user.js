'use strict'
const userRepo = require('../repositories/user')

const addUser = async (body) => {
    try {
        const response = await userRepo.addUser(body)
        return response
    } catch (error) {
        return error
    }
}

module.exports = {
    addUser
}