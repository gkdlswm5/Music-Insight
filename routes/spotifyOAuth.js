// const express = require("express");
// const request = require("request");
// const querystring = require("querystring");
// const axios = require("axios");
// router = require("express").Router();

// const app = express();

// //credidentials
// var client_id = "b2949ec27c3648d0bb57d16d701747d7";
// var client_secret = "b2949ec27c3648d0bb57d16d701747d7";
// var scope = "user-read-private user-read-email";
// var redirect_url = "http://localhost:3000/";

// // /spotify/login
// router.get("/login", function (req, res) {
//   var scope = "user-read-private user-read-email";
//   var redirect_url = res.redirect(
//     "https://accounts.spotify.com/authorize?" +
//       querystring.stringify({
//         response_type: "code",
//         client_id: client_id,
//         client_secret: client_secret,
//         scope: scope,
//         redirect_url: redirect_url,
//       })
//   );
// });
