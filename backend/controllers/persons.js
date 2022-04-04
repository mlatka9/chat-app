const { NotFound, Unauthenticated, BadRequest } = require("../errors/index");
const Person = require("../models/Person");
const { auth } = require('../firebase')

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
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
        throw new BadRequest('Provide authorization token')
    }
    const token = authorizationHeader.slice(7)
    try {
        const decodedToken = await auth.verifyIdToken(token);
        console.log(decodedToken.uid)
        const user = await auth.getUser(decodedToken.uid)
        const name = user.email.split("@")[0]
        const createdPerson = await Person.create({ _id: user.uid, name });
        res.json(createdPerson);
    } catch (err) {
        console.log(err)
        throw new Unauthenticated('Authentication invalid')
    }
}

module.exports = { getPerson, addPerson, getAllPersons }