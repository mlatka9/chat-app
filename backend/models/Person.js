const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const personSchema = new Schema({
    _id: String,
    name: {
        type: String,
        minlength: [3, 'name must hava at lest 3 characters'],
        required: [true, 'name is required']
    },
    photoURL: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        default: null
    },
    phoneNumber: {
        type: String,
        default: null
    },
})

module.exports = mongoose.model('Person', personSchema);