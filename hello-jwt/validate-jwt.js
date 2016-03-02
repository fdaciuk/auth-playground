'use strict'

const jwt = require('jwt-simple')
const User = require('./model-user')
const secret = require('./config.json').jwtSecret

module.exports = (req, res, next) => {
  const token = (req.body && req.body.access_token) ||
    (req.query && req.query.access_token) ||
    req.headers['x-access-token']

  if (token) {
    try {
      const decoded = jwt.decode(token, secret)
      console.log('decoding:', decoded)

      if (decoded.exp <= Date.now()) {
        return res.status(400)
          .json({ error: 'Expired access, login again' })
      }

      User.findOne({ _id: decoded.iss }, (err, user) => {
        if (err) {
          return res.status(500)
            .json({ message: 'Error to find out user for this token' })
        }

        req.user = user
        console.log('User found', req.user)
        return next()
      })
    } catch (err) {
      return res.status(401).json({ message: 'Error: invalid token' })
    }
  } else {
    res.status(401).json({ message: 'Missing token' })
  }
}
