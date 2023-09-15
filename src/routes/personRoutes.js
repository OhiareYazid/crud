const express = require('express');
const {getPersons, getPerson,createPerson, updatePerson, deletePerson} = require('../controllers/personController');
const router = express.Router();

router.get('/', getPersons);
router.post('/', createPerson);
router.get('/:id', getPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);


module.exports = router;