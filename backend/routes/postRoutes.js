const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/get-posts', postController.getPosts);
router.post('/create-post', postController.createPost);

module.exports = router;
