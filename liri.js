
const log = console.log;


// dotenv is the module that will load the api id and secret from the .env file.
require("dotenv").config();



// variable importing the node-spotify-api npm package.
var mySpotify = require("node-spotify-api");

// variable importing the api key.
var myKeys = require("./keys");

// check api keys imported correctly.
log(myKeys);

// variable importing the axios npm package.
var axios = require("axios");

// var importing the moment npm.
var moment = require("moment");

// variable importing the fs package for read/write.
var fs = require("fs");

// var initializing the spotify api.
var spotify = new mySpotify(keys.spotify);

// function to retrieve artist name.
var artistName = function(artist) {
 return artist.name;
};

// function to run the search on spotify.
var getSpotify = function(songName) {
 if (songName === undefined) {
  songName = "What's my age again";
 }

 spotify.search(
  {
   type: "track",
   query: songName
  },
  function(err, data) {
   if (err) {
    log("Error occurred: " + err);
    return;
   }

   var songs = data.tracks.items;

   for (var i = 0; i < songs.length; i++) {
    log(i);
    log("artist(s): " + songs[i].artists.map(artistName));
    log("song name: " + songs[i].name);
    log("preview song: " + songs[i].preview_url);
    log("album: " + songs[i].album.name);
    log("-------")

   }
  }

 );
};

var getBands = function(artist) {
 var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

 axios.get(queryURL).then(
  function(response) {
   var jsonData = response.data;

   if (!jsonData.length) {
    log("NO results found for " + artisit);
    return;
   }

   log("upcoming concerts for " + artist + ":");

   for (var i = 0; i < jsonData.length; i++) {
    
   }
  }
 )
}





