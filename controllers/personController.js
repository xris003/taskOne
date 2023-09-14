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
  // Use express-validator to validate 'id','name' fields
  body("id").isInt().withMessage("ID must be a valid integer"),
  body("name").isString().withMessage("Invalid name"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Validation passed; proceed with creating the person
    const person = new Person({
      id: req.body.id,
      name: req.body.name,
    });

    person
      .save()
      .then((response) => {
        res.status(201).json({
          data: response,
          message: "New person created",
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: "Data Creation Error",
        });
      });
  },
];

exports.updatePerson = (req, res, next) => {
  let personID = req.body.personID;

  let updatedData = {
    id: req.body.id,
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
