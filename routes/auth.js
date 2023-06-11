const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

router.get('/auth/signin', authController.auth_signin_get)
router.post('/auth/signin', authController.auth_signin_post)
router.get('/auth/signup', authController.auth_signup_get)
router.post('/auth/signup', authController.auth_signup_post)

module.exports = router