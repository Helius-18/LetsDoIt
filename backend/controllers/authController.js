const User = require('../models/userModel');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// Generate OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send OTP Email
const sendOTPEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    await transporter.sendMail(mailOptions);
};

exports.signup = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });

        const otp = generateOTP();
        await sendOTPEmail(email, otp);

        
        if (user) {
            console.log('updating otp')
            await user.updateOne({otp : otp});
        }
        else {
            const newUser = new User({ email, otp });
            await newUser.save();
        }
        res.status(200).json({newUser : false, message: 'OTP sent to email'})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.verifyOTP = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Email not found' });
        }
        else if (user.otp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        user.isVerified = true;
        user.otp = undefined;
        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, user : user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateUsername = async (req, res) => {
    const { email, username } = req.body;
    try {
        const user = await User.findOne({ email });

        user.username = username;
        user.isNew = false;
        await user.save();

        res.status(200).json({ message : 'Username has updated' });
    } catch (error) {
        res.status(500).json({ message : error.message })
    }
}