const express = require('express')
const router = express.Router()
const isLoggedIn = require('../lib/isLoggedIn')


// const authController = require('../controllers/auth')
const userController = require('../controllers/user')


// router.get('/views/user/edit', userController.auth_edit_get)
// router.post('/views/user/edit', userController.auth_edit_post)
router.get('/user/forgotpassword', isLoggedIn, userController.user_forgotpassword_get)
router.post('/user/forgotpassword', isLoggedIn, userController.user_forgotpassword_post)
router.post('/user/changepassword',isLoggedIn, userController.user_changepassword_post)
router.get('/user/profile', isLoggedIn, userController.user_profile_get)


module.exports = router