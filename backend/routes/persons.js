const router = require('express').Router();

// const protectedRouter = require('express').Router();

const {addPerson, getPerson, getAllPersons, updatePerson} = require('../controllers/persons')

router.route("/").get(getAllPersons).post(addPerson)
router.route("/:id").get(getPerson).patch(updatePerson);



module.exports = router;