const router = require('express').Router();

const {createChannel, getAllChannels, getChannel,joinChannel } = require('../controllers/channels');

router.route('/').post(createChannel).get(getAllChannels);
router.route('/:id').get(getChannel).post(joinChannel);

module.exports = router;