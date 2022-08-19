const mongoose = require("mongoose");
require("dotenv").config();

//  Variables
const url = process.env.URL;

// Database Connection
mongoose.connect(url).catch((err) => console.error(err));

module.exports = mongoose;
