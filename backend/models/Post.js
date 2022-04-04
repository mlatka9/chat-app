const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const postSchema = new Schema({
    content: {
        type: String,
        required: [true, 'content is required']
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required : [true, "postedBy is required"]

    },
    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Channel',
        required: [true, "channel is required"]
    }
},
{
    timestamps: true,
  })

module.exports = mongoose.model('Post', postSchema);