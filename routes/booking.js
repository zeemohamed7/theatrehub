const express = require('express')
const router = express.Router()
const isLoggedIn = require('../lib/isLoggedIn')

const bookingCtrl = require('../controllers/booking')


// Routes
// router.get('/movies/detail', isLoggedIn, bookingCtrl.booking_get)
router.post('/movies/detail', isLoggedIn, bookingCtrl.booking_confirm_post)

module.exports = router