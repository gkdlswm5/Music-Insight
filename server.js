const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const querystring = require("querystring");
const axios = require("axios");
var request = require("request");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var SpotifyWebApi = require("spotify-web-api-node");

const PORT = process.env.PORT || 3001;
const app = express();

// const apiRoutes = require("./routes/apiRoutes");
// const OAuthRoutes = require("./routes/spotifyOAuth");

const API = require("./routes/apiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var token = "";

//mongoose

//Spotify
var client_id = "b2949ec27c3648d0bb57d16d701747d7";
var client_secret = "75259dc638dd4dadb1f54dc3977769f6";
// var scope = "user-read-private user-read-email";
// var redirect_uri = "http://localhost:3000/";

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
});

app.get("/token", (req, res) => {
  // Retrieve an access token.
  spotifyApi.clientCredentialsGrant().then(
    function (data) {
      console.log("The access token expires in " + data.body["expires_in"]);
      console.log("The access token is " + data.body["access_token"]);
      res.send(data);
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body["access_token"]);
      token = data.body["access_token"];
      console.log(token);
    },
    function (err) {
      console.log("Something went wrong when retrieving an access token", err);
    }
  );
});

app.get("/test", (req, res) => {
  spotifyApi.getArtistAlbums(
    "43ZHCT0cAZBISjO8DG9PnE",
    { limit: 10, offset: 20 },
    function (err, data) {
      if (err) {
        console.error("Something went wrong!");
      } else {
        console.log(data.body[0]);
        res.send(data);
      }
    }
  );
});

//route for searching by song
app.get("/api/song/:name", (req, res) => {
  let name = req.params.name;
  console.log(name);
  let query = `track:${name}`;
  spotifyApi.searchTracks(query).then((data) => {
    console.log(data);
    res.send(data);
  });
});

//fetches song data
app.get("/analysis/song/:songID", (req, res) => {
  var songID = req.params.songID;

  spotifyApi.getAudioAnalysisForTrack(songID).then((data) => res.send(data));

  //ATTEMPTED USING SPOTIFY
  //   let songID = req.params.songID;
  //   console.log(songID);
  //   var queryURL = querystring.stringify({
  //     url: "https://api.spotify.com/v1/audio-analysis/" + songID,
  //     headers: {
  //       Authorization: token,
  //     },
  //   });
  //   console.log(queryURL);

  //   axios
  //     .get(queryURL)
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
