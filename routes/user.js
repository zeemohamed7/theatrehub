const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

router.get('/views/user/edit', authController.auth_edit_get)
router.post('/views/user/edit', authController.auth_edit_post)
router.get('/views/user/changepassword', authController.auth_changepassword_get)
router.post('/views/user/changepassword', authController.auth_changepassword_post)

module.exports = router