// controllers/personController.js
const Person = require('../models/personModel');

// Create a new person
exports.createPerson = (req, res) => {
  const newPerson = new Person(req.body);
  newPerson.save((err, person) => {
    if (err) res.status(400).send(err);
    res.json(person);
  });
};

// Get details of a person by user_id
exports.getPerson = (req, res) => {
  Person.findById(req.params.user_id, (err, person) => {
    if (err) res.status(404).send('Person not found');
    res.json(person);
  });
};

// Update details of an existing person by user_id
exports.updatePerson = (req, res) => {
  Person.findByIdAndUpdate(req.params.user_id, req.body, { new: true }, (err, person) => {
    if (err) res.status(400).send(err);
    res.json(person);
  });
};

// Remove a person by user_id
exports.deletePerson = (req, res) => {
  Person.findByIdAndRemove(req.params.user_id, (err) => {
    if (err) res.status(404).send('Person not found');
    res.send('Person deleted successfully');
  });
};
