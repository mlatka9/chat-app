const router = require('express').Router();
const {addPost,getAllPost} = require('../controllers/posts')

router.route('/').get(getAllPost).post(addPost)

module.exports = router;