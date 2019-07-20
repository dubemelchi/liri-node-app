
// dotenv is the module that will load the api id and secret from the .env file.
require("dotenv").config();



// variable importing the node-spotify-api npm package.
var mySpotify = require("node-spotify-api");

// variable importing the api key.
var myKeys = require("./keys");

// check api keys imported correctly.
console.log(myKeys);

// variable importing the axios npm package.
var axios = require("axios");

// var importing the moment npm.
var moment = require("moment");

// variable importing the fs package for read/write.
var fs = require("fs");

// var initializing the spotify api.
var spotify = new mySpotify(keys.spotify);





