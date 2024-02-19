// importing required packages
require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({extended: true}));

// using routes
app.use('/products', require('./routes/products'));

// starting the server
app.listen(port, function (err) {
    if (err) {
      console.log("error in running the server", err);
      return;
    }
  
    console.log("Server is running on port :", port);
  });