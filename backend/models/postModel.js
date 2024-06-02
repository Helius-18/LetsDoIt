
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    text: { type: String, required: true },
    time: { type: String, required: true },
});

const imageSchema = new mongoose.Schema({
    src: { type: String, required: true },
});

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    text: { type: String, required: true },
    comments: [commentSchema],
    images: [imageSchema],
});

const Posts = mongoose.model('Post', postSchema);

module.exports = Posts;
