// App File
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/get-info", (req, res) => {
  // Get the values of the two GET parameters
  const param1 = req.query.param1;
  const param2 = req.query.param2;

  // Perform any necessary processing based on the parameters
  // For this example, we'll just return them in a JSON object
  const response = {
    parameter1: param1,
    parameter2: param2,
  };

  // Send the JSON response
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
