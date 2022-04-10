const router = require('express').Router();
const {addPost, getPostsFromChannel} = require('../controllers/posts');

router.route('/').get(getPostsFromChannel).post(addPost);

module.exports = router;