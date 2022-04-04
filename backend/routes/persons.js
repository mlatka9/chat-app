const publicRouter = require('express').Router();
const protectedRouter = require('express').Router();
const {addPerson, getPerson, getAllPersons, updatePerson} = require('../controllers/persons')

publicRouter.route("/").get(getAllPersons)
publicRouter.route("/:id").get(getPerson);

protectedRouter.route("/:id").patch(updatePerson);
protectedRouter.route("/").post(addPerson)

module.exports = {publicRouter, protectedRouter};