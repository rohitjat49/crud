require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
require("./src/db/corn");
const  UsersRegister = require("./src/models/regiter");
const router = require("./src/routers/router")
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001; // You can change this port number if needed

// Middleware to parse JSON requests

app.use(cors());
app.use(express.json());
router.use(bodyParser.json());
app.use(router);

// In-memory employee data for demo purposes (replace with a database in a real-world scenario)


// Routes



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});