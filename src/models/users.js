'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { plugin } = require('mongoose-auto-increment')

const userSchema = new Schema({
  name: String
}, {
  collection: 'users'
})

userSchema.plugin(plugin, {
  model: 'users',
  field: 'user_id',
  startAt: 1,
  incrementBy: 1
})

module.exports = mongoose.model('users', userSchema)
