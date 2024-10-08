const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller')

router.post('/register-user', userController.signUp)
router.post('/sign-in', userController.signIn)


module.exports = router