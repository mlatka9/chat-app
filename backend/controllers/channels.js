const { NotFound, Unauthenticated } = require('../errors/index');
const Channel = require('../models/Channel');
const {StatusCodes} = require('http-status-codes')

const getAllChannels = async (req, res) => {
    const channels = await Channel.find({}).select({name: 1, abbreviation: 1});
    res.json(channels)
}

const getChannel = async (req, res) => {
    const {id} = req.params;
    const channel = await Channel.findOne({_id: id}).populate('members');
    if(!channel) {
        throw new NotFound(`Channel with id ${id} does not exists`)
    }
    res.json(channel)
}

const createChannel = async (req, res) => {
    const {name, description, abbreviation} = req.body;
    const createdCannel = await Channel.create({name, description, abbreviation});
    res.status(201).json(createdCannel)
}

const joinChannel = async (req, res) => {
    const { id } = req.params
    const { channelPassword } = req.body
    const personId = req.user.uid

    const channel = await Channel.findById(id);
    const isMember = channel.members.includes(personId);

    if(isMember) {
        return res.json({message: `Person is member of channel with id ${id}`})
    } 

    if(!channel.isPrvate || channelPassword===channel.password) {
        channel.members = channel.members.concat(personId)
        await channel.save()
        return res.json({message: `Person is member of channel with id ${id}`})
    }
    throw new Unauthenticated(`Person is member of channel with id ${id}`)
}

module.exports = {
    getAllChannels,
    getChannel,
    createChannel,
    joinChannel
}