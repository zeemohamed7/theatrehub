const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

router.post('', authController.auth_edit_post)
router.get('', authController.auth_edit_get)
router.post('', authController.auth_changepassword_post)
router.get('', authController.auth_changepassword_get)

module.exports = router