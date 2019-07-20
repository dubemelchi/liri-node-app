
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
    var show = jsonData[i];

    log(
     show.venue.city + "," + (show.venue.region || show.venue.country) + " at " + show.venue.name + " " + moment(show.datatime).format("MM/DD/YYYY")
    );
   }
  }
 );
};

// function for the movie search
var getMovie = function (movieName) {
 if (movieName === undefined) {
  movieName = "Inception";
 }

 var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

 axios.get(urlHit).then(
  function(response) {
   var jsonData = respnse.data;

   log("Title: " + jsonData.Title);
   log("Year: " + jsonData.Year);
   log("Rated: " + jsonData.Rated);
   log("IMDB Rating: " + jsonData.imdbRating);
   log("Country: " + jsonData.Country);
   log("Language: " + jsonData.Language);
   log("Plot: " + jsonData.Plot);
   log("Actors: " + jsonData.Actors);
   log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
  }
 );
};

// ?????
var doSomething = function() {
 fs.readFile("random.txt", "utf8", function(error, data) {
  log(data);

  var dataArr = data.split(",");

  if (dataArr.length === 2) {
   pick(dataArr[0], dataArr[1]);
  }else if (dataArr.length === 1) {
   pick(dataArr[0]);
  }
 });
};

// ???
var pick = function(caseData, functionData) {
 switch (caseData) {
  case "concert-this":
   getBands(functionData);
   break;
  
  case "spotify-this-song":
   getSpotify(functionData);
   break;

  case "movie_this":
   getMovie(functionData);
   break;

  case "do-what-it-says":
   doSomething();
   break;

  default:
   log("LIRI doesn't know that");
 }
};

// function which takes in the command line argvs.
var runThis = function(argOne, argTwo) {
 pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv.slice(3).join(" "));







