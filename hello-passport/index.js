'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

const router = express.Router()
const app = express()
const PORT = process.env.PORT || 3000

require('./config/passport')(passport)
require('./routes')(router, passport)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use('/', router)

app.listen(PORT, () => console.log('Listening on port', PORT))
