const router = require('express').Router();

const {createChannel, getAllChannels, getChannel} = require('../controllers/channels');

router.route('/').post(createChannel).get(getAllChannels);
router.route('/:id').get(getChannel);

module.exports = router;