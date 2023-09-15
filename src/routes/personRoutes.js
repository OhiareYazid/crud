// routes/personRoutes.js
const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// Create a new person
router.post('/', personController.createPerson);

// Get details of a person by user_id
router.get('/:user_id', personController.getPerson);

// Update details of an existing person by user_id
router.put('/:user_id', personController.updatePerson);

// Remove a person by user_id
router.delete('/:user_id', personController.deletePerson);

// routes/personRoutes.js
// ...

// Get details of a person by name
router.get('/name/:name', (req, res) => {
    const name = req.params.name;
    Person.findOne({ name }, (err, person) => {
      if (err) res.status(404).send('Person not found');
      res.json(person);
    });
  });
  

module.exports = router;
