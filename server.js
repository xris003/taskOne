const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");

const personRoutes = require("./routes/personRoutes");

dotenv.config({ path: "./config.env" });
const app = require("./index");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}.... `);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

app.use("/api", personRoutes);
