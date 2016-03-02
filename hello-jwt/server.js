'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jwt-simple')
const routes = require('./routes')
const validateJWT = require('./validate-jwt')
const router = express.Router()
const port = process.env.PORT || 8080
const db = require('./config.json').db

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)
router.route('/users')
  .get(validateJWT, routes.getUsers)
  .post(routes.postUsers)
router.route('/login')
  .post(routes.login)

mongoose.connect(db)
app.listen(port)
console.log('connected on localhost:' + port)
