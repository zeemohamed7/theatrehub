const express = require('express')
const router = express.Router()

const bookingCtrl = require('../controllers/booking')

// Routes
router.get('/user/booking', bookingCtrl.booking_get)

module.exports = router