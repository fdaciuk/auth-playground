'use strict'

const controllerCreateUser = require('./controller-create-user')
const controllerLogin = require('./controller-login')

exports.getUsers = (req, res) => {
  res.json({ message: 'GET /users' })
}

exports.postUsers = controllerCreateUser
exports.login = controllerLogin
