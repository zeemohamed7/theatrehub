const express = require('express')
const router = express.Router()
const isLoggedIn = require('../lib/isLoggedIn')


// const authController = require('../controllers/auth')
const userController = require('../controllers/user')
const seatsController = require('../controllers/seats')


router.get('/user/forgotpassword', userController.user_forgotpassword_get)
router.post('/user/forgotpassword',userController.user_forgotpassword_post)
router.post('/user/changepassword', userController.user_changepassword_post)
router.get('/user/changepassword', userController.user_changepassword_get)
router.get('/user/profile', isLoggedIn, userController.user_profile_get)
router.post('/user/profile', userController.user_profile_post)

router.get('/views/booking/seats', userController.booking_seats_get)
router.post('/views/booking/seats', userController.booking_seats_post)


module.exports = router