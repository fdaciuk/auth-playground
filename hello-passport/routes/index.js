'use strict'

module.exports = (router, passport) => {
  router.post(
    '/login',
    passport.authenticate('local', { session: false }),
    (req, res) => {
    res.json({ message: 'login successful', user: req.user })
  })
}
