const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const querystring = require("querystring");
const axios = require("axios");
var request = require("request");
var cors = require("cors");
var cookieParser = require("cookie-parser");

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

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

//Spotify
var client_id = "b2949ec27c3648d0bb57d16d701747d7";
var client_secret = "b2949ec27c3648d0bb57d16d701747d7";
var scope = "user-read-private user-read-email";
var redirect_uri = "http://localhost:3000/";

//

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = "spotify_auth_state";

app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(cookieParser());

app.get("/login", function (req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);
  // your application requests authorization
  var scope = "user-read-private user-read-email";
  var url =
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
    });
  res.redirect(url);
  console.log(url);
  console.log("working");
});

// app.get("/login", function (req, res) {
//   var scopes = "user-read-private user-read-email";
//   res.redirect(
//     "https://accounts.spotify.com/authorize" +
//       "?response_type=code" +
//       "&client_id=" +
//       client_id +
//       (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
//       "&redirect_uri=" +
//       encodeURIComponent(redirect_uri)
//   );
// });

app.get("/authorize", (req, res) => {
  res.redirect(
    "https://accounts.spotify.com/authorize" +
      querystring.stringify({
        client_id: client_id,
        response_type: "code",
        redirect_uri: redirect_uri,
      })
  );
});

app.get("/callback", function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
          refresh_token = body.refresh_token;

        var options = {
          url: "https://api.spotify.com/v1/me",
          headers: { Authorization: "Bearer " + access_token },
          json: true,
        };

        // use the access token to access the Spotify Web API
        request.get(options, function (error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect(
          "/#" +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token,
            })
        );
      } else {
        res.redirect(
          "/#" +
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    });
  }
});

app.get("/refresh_token", function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        access_token: access_token,
      });
    }
  });
});

app.get("/test", (req, res) => {
  res.send("working");
  // res.redirect("/login");
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});

// /spotify/login
// var queryParams = {
//   grant_type: "client_credentials",
//   client_id: client_id,
//   client_secret: client_secret,
//   scope: scope,
//   redirect_uri: redirect_uri,
// };

// app.get("/login", function (req, res) {
//   // your application requests authorization
//   // var scope = "user-read-private user-read-email";
//   res.redirect(
//     "https://accounts.spotify.com/authorize?" +
//       querystring.stringify({
//         response_type: "code",
//         client_id: client_id,
//         scope: scope,
//         redirect_uri: redirect_uri,
//       })
//   );
// });

// var authOptions = {
//   url: "https://accounts.spotify.com/api/token",
//   form: {
//     // code: code,
//     redirect_uri: redirect_uri,
//     grant_type: "authorization_code",
//   },
//   headers: {
//     Authorization:
//       "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64"),
//   },
//   json: true,
// };

// var tokenBody = {
//   grant_type: "client_credentials",
// };

// var tokenHeader = {
//   Authorization:
//     "Basic" + new Buffer(client_id + ":" + client_secret).toString("base64"),
// };

// app.post("/token", function (req, res) {
//   request.post(authOptions, function (req, res) {
//     if (!error && response.statusCode === 200) {
//       console.log(response);
//       var access_token = body.access_token;
//       res.send({
//         access_token: access_token,
//       });
//     }
//   });
// });

// app.get("/login2", (req, res) => {
//   console.log("working");
//   res.send("working");
// });
