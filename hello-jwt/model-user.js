'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
})

UserSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(5, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.checkPassword = (password, next) => {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return next(err)
    next(isMatch)
  })
}

module.exports = mongoose.model('User', UserSchema)
