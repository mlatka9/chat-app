const notFound = require('../middleware/not-found');
const Channel = require('../models/Channel');

const getAllChannels = async (req, res) => {
    const channels = await Channel.find({});
    res.json(channels)
}

const getChannel = async (req, res) => {
    const {id} = req.params;
    const channel = await Channel.findOne({_id: id});
    if(!channel) {
        throw new notFound(`Channel with id ${id} does not exists`)
    }
    res.json(channel)
}

const createChannel = async (req, res) => {
    const {name, description} = req.body;
    const createdCannel = await Channel.create({name, description});
    res.status(201).json(createdCannel)
}

module.exports = {
    getAllChannels,
    getChannel,
    createChannel
}