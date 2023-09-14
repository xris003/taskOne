const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  id: {
    type: Number,
    max: [100, "id too high"],
    //required: [true, "Please enter an id"],
  },
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
