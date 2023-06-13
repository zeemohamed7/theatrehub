const express = require('express')
const router = express.Router()
const isLoggedIn = require('../lib/isLoggedIn')

const bookingCtrl = require('../controllers/booking')


// Routes
router.get('/booking', bookingCtrl.booking_get)

module.exports = router