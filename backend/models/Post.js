const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const postSchema = new Schema({
	content: {
		type: String,
		required: [true, 'content is required']
	},
	postedBy: {
		type: String,
		ref: 'Person',
		required: [true, 'postedBy is required']
	},
	channel: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Channel',
		required: [true, 'channel is required']
	}
},
{
	timestamps: true,
});

postSchema.options.toJSON = {
	transform: function (doc, ret) {
		ret.id = ret._id;
		delete ret._id;
		delete ret.__v;
		return ret;
	}
};

postSchema.options.toJSON = {
	transform: function (doc, ret) {
		ret.id = ret._id;
		delete ret._id;
		delete ret.__v;
		return ret;
	}
};

module.exports = mongoose.model('Post', postSchema);