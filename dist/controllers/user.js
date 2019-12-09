'use strict';

const userService = require('../services/user');

const addUser = async (req, res) => {
  try {
    const body = req.body;
    const response = await userService.addUser(body);
    return res.send(response);
  } catch (error) {
    return res.send(error);
  }
};

module.exports = {
  addUser
};