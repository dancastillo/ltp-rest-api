const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const options = {
  useMongoClient: true
};

const uri = 'mongodb://localhost:27017/learntoprogramtv';

mongoose.connect(uri, options).then(
  () => { console.log("Connected to mongodb....") },
  err => { console.log(err) }
);

app.listen(port); 
console.log('App running on ' + port);