const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: false },
    isVerified: { type: Boolean, default: false },
    isNew: { type: Boolean, default: true },
    otp: { type: String }
});

module.exports = mongoose.model('User', userSchema);