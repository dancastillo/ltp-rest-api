// import node modules
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const List = require("./api/models/model");

mongoose.Promise = global.Promise;

const options = {
  useMongoClient: true
};

const uri = 'mongodb://localhost:27017/learntoprogramtv';

// connect to mongodb
mongoose.connect(uri, options).then(
  () => { console.log("Connected to mongodb....") },
  err => { console.log(err) }
);

// handle incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./api/routes/routes");

// register routes
routes(app);

app.listen(port); 
console.log('App running on ' + port);