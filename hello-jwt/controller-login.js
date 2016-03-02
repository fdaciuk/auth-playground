'use strict'

const User = require('./model-user')
const jwt = require('jwt-simple')
const moment = require('moment')
const secret = require('./config.json').jwtSecret

module.exports = (req, res) => {
  const username = req.body.username || ''
  const password = req.body.password || ''
  if (!username || !password) return res.send(401)

  User.findOne({ username: username }, (err, user) => {
    if (err) return res.send(401)

    user.checkPassword(password, (isMatch) => {
      if (!isMatch) return res.send(401)
      const expires = moment().add(7, 'days').valueOf()
      const token = jwt.encode({
        iss: user.id,
        exp: expires
      }, secret)

      return res.json({
        token: token,
        expires: expires,
        user: user.toJSON()
      })
    })
  })
}
