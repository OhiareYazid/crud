// controllers/personController.js
const Person = require("../models/personModel");

// Create a new person
exports.createPerson = async (req, res) => {
  
  const newPerson = new Person(req.body);
  try {
    const person = await newPerson.save();
    console.log(res.json(person));
    return res.json(person);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get details of a person by user_id
exports.getPerson = async (req, res) => {
  try {
    const person = await Person.findById(req.params.user_id);

    return res.json(person);
  } catch (error) {
    res.status(404).send("Person not found");
  }
};

// Update details of an existing person by user_id
exports.updatePerson = (req, res) => {
  Person.findByIdAndUpdate(
    req.params.user_id,
    req.body,
    { new: true },
    (err, person) => {
      if (err) res.status(400).send(err);
      res.json(person);
    }
  );
};

// Remove a person by user_id
exports.deletePerson = (req, res) => {
  Person.findByIdAndRemove(req.params.user_id, (err) => {
    if (err) res.status(404).send("Person not found");
    res.send("Person deleted successfully");
  });
};
