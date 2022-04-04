const Post = require("../models/Post");
const Person = require('../models/Person')
const Channel = require('../models/Channel')
const {BadRequest} = require('../errors/index')

const getAllPost = async (req, res) => {
    const posts = await Post.find({});
    res.json(posts);
}

const addPost = async (req, res) => {
    const {content, postedBy, channelId} = req.body;
    const person =  await Person.findById(postedBy);
    if(!person) {
        throw new BadRequest(`Cannot find person with id ${postedBy}`);
    }
    const channel = await Channel.findById(channelId);
    if(!channel) {
        throw new BadRequest(`Cannot find channel with id ${channelId}`);
    }

    const createdPost = await Post.create({content, postedBy: person._id, channel: channel._id});
    res.json(createdPost);
}

module.exports = {getAllPost, addPost}