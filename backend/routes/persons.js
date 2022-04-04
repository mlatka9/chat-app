const router = require('express').Router();
const {addPerson, getPerson, getAllPersons} = require('../controllers/persons')

router.route("/:id").get(getPerson);
router.route("/").post(addPerson).get(getAllPersons)

module.exports = router;