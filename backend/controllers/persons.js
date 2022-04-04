const { NotFound, Unauthenticated, BadRequest } = require("../errors/index");
const {StatusCodes} = require('http-status-codes');
const Person = require("../models/Person");


const getAllPersons = async (req, res) => {
    const persons = await Person.find({});
    res.json(persons)
}

const getPerson = async (req, res) => {
    const { id } = req.params;
    const person = await Person.findOne({ _id: id });
    if (!person) {
        throw new NotFound(`Person with id ${id} does not exists`)
    }
    res.json(person);
}

const addPerson = async (req, res) => {
        const user = req.user
        console.log("USER", user)
        const name = user.email.split("@")[0];
        const createdPerson = await Person.create({ _id: user.uid, name });
        res.status(StatusCodes.CREATED).json(createdPerson);
}

const updatePerson = async (req, res) => {
    const {id} = req.params;
    const {name, photoURL, bio, phoneNumber } = req.body;

    const person = await Person.findById(id);

    if(person._id !== req.user.uid) {
        throw new Unauthenticated('You can\'t modify this person')
    }
    if(name) {
        person.name = name;
    }
    if(photoURL) {
        person.photoURL = photoURL;
    }
    if(bio) {
        person.bio = bio;
    }
    if(phoneNumber) {
        person.phoneNumber = phoneNumber;
    }
    const updatePerson = await person.save();
    res.json(updatePerson)
}

module.exports = { getPerson, addPerson, getAllPersons, updatePerson }