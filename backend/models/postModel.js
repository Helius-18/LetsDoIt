
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

// POST MODEL
// {
//     id: 1,
//     title: 'The Surprising Benefits of Meditation',
//     subtitle: 'By John Doe, May 13, 2024',
//     text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
//     comments: [
//       { name: 'Jane Smith', text: 'I\'ve been practicing meditation for a few months now and it\'s really helped me manage my stress and anxiety. Highly recommend giving it a try!', time: '2 days ago' },
//       { name: 'Michael Johnson', text: 'I\'m new to meditation but this article has inspired me to give it a try. Can\'t wait to experience the benefits for myself.', time: '1 week ago' }
//     ],
//     images: [
//       { src: 'https://generated.vusercontent.net/placeholder.svg' },
//       { src: 'https://generated.vusercontent.net/placeholder.svg' },
//       { src: 'https://generated.vusercontent.net/placeholder.svg' }
//     ]
//   }