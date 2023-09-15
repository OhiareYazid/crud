const Person = require("../models/personModel");

// Create a new person
exports.createPerson = async (req, res) => {
  const newPerson = new Person(req.body);
  try {
    const person = await newPerson.save();
    res.json(person);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get details of a person by user_id
exports.getPerson = async (req, res) => {
  try {
    const person = await Person.findById(req.params.user_id);
    res.json(person);
  } catch (error) {
    res.status(404).send("Person not found");
  }
};

// Update details of an existing person by user_id
exports.updatePerson = async (req, res) => {
  const person = await Person.findByIdAndUpdate(
    req.params.user_id,
    req.body,
    { new: true }
  );
  res.json(person);
};

// Remove a person by user_id
exports.deletePerson = async (req, res) => {
  await Person.findByIdAndRemove(req.params.user_id);
  res.send("Person deleted successfully");
};
