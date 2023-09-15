const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    unique: [true, "Name already exists in the database"],
  },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
