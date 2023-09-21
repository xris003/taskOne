const { validationResult, body } = require("express-validator");
const { response } = require("express");
const Person = require("../models/personModels");

exports.getPerson = (req, res, next) => {
  Person.find()
    .then((response) => {
      res.status(200).json({
        status: "success",
        data: response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error Response",
      });
    });
};

exports.createPerson = [
  // Use express-validator to validate 'name' fields
  body("name")
    .isString()
    .withMessage("Invalid name")
    .custom(async (value) => {
      // Check if the name already exists in the database
      const existingPerson = await Person.findOne({ name: value });
      if (existingPerson) {
        throw new Error("Name already exists in the database");
      }
      // Return true to indicate the validation passed
      return true;
    })
    .bail() // Stops running validations if previous validation fails
    .notEmpty()
    .withMessage("Please enter your name"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Handle validation errors
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }

    // Validation passed; proceed with creating the person
    const person = new Person({
      name: req.body.name,
    });

    //  Returns the new dat stored to the database
    person
      .save()
      .then((response) => {
        res.status(201).json({
          data: response,
          message: "New person created",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        res.status(400).json({
          message: "Data Creation Error",
        });
      });
  },
];

exports.updatePerson = (req, res, next) => {
  let personID = req.body.personID;

  let updatedData = {
    name: req.body.name,
  };

  Person.findOneAndUpdate(personID, { $set: updatedData })
    .then(() => {
      res.status(200).json({
        status: "success",
        data: {
          person: updatedData,
        },
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occurred",
      });
    });
};

exports.deletePerson = (req, res, next) => {
  let personID = req.body.personID;
  Person.findByIdAndRemove(personID)
    .then(() => {
      res.json({
        message: "Deleted Successfully",
      });
    })
    .catch((error) => {
      req.json({
        message: "Sorry error occured",
      });
    });
};
