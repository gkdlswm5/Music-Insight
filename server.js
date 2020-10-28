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

//mongoose

//Spotify
var client_id = "b2949ec27c3648d0bb57d16d701747d7";
var client_secret = "75259dc638dd4dadb1f54dc3977769f6";
var scope = "user-read-private user-read-email";
var redirect_uri = "http://localhost:3000/";

// var clientId = client_id,
//   clientSecret = client_secret;

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function (data) {
    console.log("The access token expires in " + data.body["expires_in"]);
    console.log("The access token is " + data.body["access_token"]);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body["access_token"]);
  },
  function (err) {
    console.log("Something went wrong when retrieving an access token", err);
  }
);

// credentials are optional
// var spotifyApi = new SpotifyWebApi({
//   clientId: client_id,
//   clientSecret: client_secret,
//   redirectUri: redirect_uri,
// });

// var scopes = ["user-read-private", "user-read-email"],
//   state = "some-state-of-my-choice";

// var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// console.log(authorizeURL);

// var code =
//   "AQBe3MYCrphBx0o7spkbjnd2oza2xJ-YB46fesXDfqWkyFWjDOU117m68iwSagPK3KH1Vf_9KRkOmkH50HNAPiR8nLS0Q9HmgLyjSAcUlF8UpmwaTUla6oU_FqvI_yW3TzgJ6_yGnUid7AyfRLkdfHLJqduNJCWzfyXpsD3T7Z7R4ubtUaSdckzSeCdsEwi8su5c0P659CUI1W7lV98";
// var code2 = "MQCbtKe23z7YzzS44KzZzZgjQa621hgSzHN";
// // Retrieve an access token and a refresh token
// spotifyApi.authorizationCodeGrant(code).then(
//   function (data) {
//     console.log("The token expires in " + data.body["expires_in"]);
//     console.log("The access token is " + data.body["access_token"]);
//     console.log("The refresh token is " + data.body["refresh_token"]);

//     // Set the access token on the API object to use it in later calls
//     spotifyApi.setAccessToken(data.body["access_token"]);
//     spotifyApi.setRefreshToken(data.body["refresh_token"]);
//   },
//   function (err) {
//     console.log("Something went wrong!", err);
//   }
// );

// spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE").then(
//   function (data) {
//     console.log("Artist albums", data.body);
//   },
//   function (err) {
//     console.error(err);
//   }
// );

app.get("/test", (req, res) => {
  res.send("working");
  // res.redirect("/login");
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
