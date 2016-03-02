'use strict'

const User = require('./model-user')

module.exports = (req, res) => {
  const data = new User({
    username: req.body.username,
    password: req.body.password
  })

  data.save((err) => {
    if (err) return res.send(err)
    res.json({ message: 'New user was created', data: data })
  })
}
