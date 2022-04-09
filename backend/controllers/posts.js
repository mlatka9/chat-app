const Post = require("../models/Post");
const Channel = require('../models/Channel')
const {BadRequest, Unauthenticated} = require('../errors/index')
const {getIO} = require('../web-socket')


const getAllPost = async (req, res) => {
    const posts = await Post.find({});
    res.json(posts);
}

const getPostsFromChannel = async (req, res) => {
    const {channelId} = req.query;
    console.log("IDD:", req.user.uid)

    const isUserInChannel = await Channel.find({_id: channelId, members: req.user.uid});
    if(!isUserInChannel) {
        throw new Unauthenticated(`User is not member of channel ${channelId}`);
    }

    const posts = await Post.find({channel: channelId}).populate('postedBy')
    res.json(posts);
}

const addPost = async (req, res) => {
    const {content, channelId} = req.body;
    const personId = req.user.uid

    const channel = await Channel.findById(channelId);
    if(!channel) {
        throw new BadRequest(`Cannot find channel with id ${channelId}`);
    }

    const isUserInChannel = await Channel.find({_id: channelId, members: personId});
    if(!isUserInChannel) {
        throw new Unauthenticated(`User is not member of channel ${channelId}`);
    }

    const createdPost = await Post.create({content, postedBy: personId, channel: channel._id})
    const populatedCreatedPost = await createdPost.populate('postedBy');
    const io = getIO()
    io.to(channelId).emit('chat message', populatedCreatedPost)
    res.json(populatedCreatedPost);
}

module.exports = {getAllPost, addPost, getPostsFromChannel}