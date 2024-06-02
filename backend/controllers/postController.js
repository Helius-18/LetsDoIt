const Posts = require('../models/postModel');

exports.getPosts = async (req, res) => {
    try {
        const data = await Posts.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createPost = async (req, res) =>{
    const newPost = new Posts(req.body);
    try {
        const data = await newPost.save();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}
