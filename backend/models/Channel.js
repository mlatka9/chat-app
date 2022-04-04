const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const channelSchema = new Schema({
    name: {
        type: String,
        required: [true, "Channel name is required"]
    },
    description: {
        type: String,
        required: [true, "Channel description is required"]
    },
    members: [{
        type: Schema.Types.ObjectId, ref: 'Person'
    }]
})

module.exports = mongoose.model('Channel', channelSchema);