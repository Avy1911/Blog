const express = require('express')
const router = express.Router()

const { likePost, unlikePost } = require('../controller/LikeController')
const { createComment } = require('../controller/commentController')
const { createPost, getAllPosts } = require('../controller/PostController')

router.get('/comments/create', createComment)
router.get('/posts/create', createPost)
router.get('/posts', getAllPosts)
router.get('/like/Likes', likePost)
router.get('/like/unLikes', unlikePost)

module.exports = router  