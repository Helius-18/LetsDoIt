const express = require('express');
const { signup, verifyOTP, updateUsername } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/verify-otp', verifyOTP);
router.post('/update-username', updateUsername);

module.exports = router;