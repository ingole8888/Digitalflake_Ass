const express = require('express');
const authController = require('../controller/userController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.put('/updatePassword', authController.updatePassword);

module.exports = router;
