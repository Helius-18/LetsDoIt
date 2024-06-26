const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes')
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors())

app.use('/api/post', postRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

module.exports = app;
