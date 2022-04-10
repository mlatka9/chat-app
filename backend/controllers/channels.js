const { NotFound, Unauthenticated } = require('../errors/index');
const Channel = require('../models/Channel');
const {getIO} = require('../web-socket');
const Person = require('../models/Person');

const getAllChannels = async (req, res) => {
	const channels = await Channel.find({}).select({name: 1, abbreviation: 1, isPrivate: 1});
	res.json(channels);
};

const getChannel = async (req, res) => {
	const {id} = req.params;
	const channel = await Channel.findOne({_id: id}).populate('members');
	if(!channel) {
		throw new NotFound(`Channel with id ${id} does not exists`);
	}
	res.json(channel);
};

const createChannel = async (req, res) => {

	const channel = {
		...req.body,
		owner: req.user.uid,
		members: [req.user.uid]
	};
	const createdCannel = await Channel.create(channel);
	res.status(201).json(createdCannel);
};

const joinChannel = async (req, res) => {
	const { id: channelId } = req.params;
	const { channelPassword } = req.body;

	const personId = req.user.uid;
	const channel = await Channel.findById(channelId);
	const isMember = channel.members.includes(personId);

	if(isMember) {
		return res.json({message: `Person is member of channel with id ${channelId}`});
	} 

	if(!channel.isPrivate || channelPassword===channel.password) {
		channel.members = channel.members.concat(personId);
		await channel.save();
		const person = await Person.findById(personId);
		getIO().to(channelId).emit('chat member', person);
		return res.json({message: `Person just joined to to channel with id ${channelId}`});
	}
	throw new Unauthenticated(`Person is not member of channel with id ${channelId}`);
};

module.exports = {
	getAllChannels,
	getChannel,
	createChannel,
	joinChannel
};