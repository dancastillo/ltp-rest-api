const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

app.listen(port); 
console.log('App running on ' + port);