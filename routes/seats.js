const express = require('express')
const router = express.Router()
const seatsController = require('..controllers/seats')
const isLoggedIn = require('..lib/isLoggedIn')

router.get('/seats/views', isLoggedIn, seatscontroller.seats_create_get)
router.post('/seats/views', isLoggedIn, seatscontroller.seats_create_post)


module.exports = router