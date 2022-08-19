const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Route
const userRouter = require("./src/Routes/user.route");

// Global Variable
const PORT = process.env.PORT | 8000;

// Express App
let app = express();

// Database Connection
const mongoose = require("./src/Services/database");

// App function
app.use(cors());
app.use(express.json());

// Express Routing

app.get("/", (req, res) => {
  res.send({ status: "Hello World" });
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port: ${PORT}...`);
});
