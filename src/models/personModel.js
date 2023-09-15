const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

module.exports = mongoose.model('Person', personSchema);