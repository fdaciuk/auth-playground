'use strict'

const LocalStrategy = require('passport-local').Strategy
const users = require('../data/users')

module.exports = (passport) => {
  const getUser = (credentials) => {
    const username = credentials.username
    const password = credentials.password
    const user = users.filter((u) => u.username === username)[0]
    if (!user)
      return Promise.reject(new Error('User not found'))

    if(user.password !== password)
      return Promise.reject(new Error('Incorrect password'))

    return Promise.resolve(user)
  }

  const configLocalStrategy = (req, username, password, done) => {
    getUser({ username, password })
      .then((user) => done(null, user))
      .catch((err) => req.res.json({ message: err.message }))
  }

  passport.use(new LocalStrategy(
    { passReqToCallback: true },
    configLocalStrategy
  ))
}
