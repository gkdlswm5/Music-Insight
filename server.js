const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const querystring = require("querystring");
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

//mongoose

//api routes
// app.use("/api", apiRoutes);
// app.use("/spotify", OAuthRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

//Spotify
var client_id = "b2949ec27c3648d0bb57d16d701747d7";
var client_secret = "b2949ec27c3648d0bb57d16d701747d7";
var scope = "user-read-private user-read-email";
var redirect_uri = "http://localhost:3000/";

// /spotify/login
var queryParams = {
  grant_type: "client_credentials",
  client_id: client_id,
  client_secret: client_secret,
  scope: scope,
  redirect_uri: redirect_uri,
};

app.get("/login", function (req, res) {
  // your application requests authorization
  // var scope = "user-read-private user-read-email";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
      })
  );
});

app.get("/login2", (req, res) => {
  console.log("working");
  res.send("working");
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
