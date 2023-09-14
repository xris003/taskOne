const express = require("express");
const router = express.Router();

const personController = require("./../controllers/personController");

router.post("/", personController.createPerson);

router
  .route("/user_id/:id")
  .get(personController.getPerson)
  .patch(personController.updatePerson)
  .delete(personController.deletePerson);

module.exports = router;
