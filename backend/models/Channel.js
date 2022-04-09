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
    abbreviation: {
        type: String,
        require: [true, 'Abbreviation is required'] 
    },
    isPrivate: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
    },
    owner: {
        type: String, ref: 'Person',
        require: [true, 'Owner is required'] 
    },
    members: [{
        type: String, ref: 'Person',
        default: []
    }]
})

channelSchema.options.toJSON = {
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};

module.exports = mongoose.model('Channel', channelSchema);