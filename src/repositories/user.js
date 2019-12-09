const usersModel = require('../models/users')

const addUser = async () => {
    const usersData = new usersModel({ name: 'vipul' })
    const response = await usersData.save()
    return response
}

module.exports = {
    addUser
}