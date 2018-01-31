const express = require('express');
const passport = require('passport');
const { spotifyAuthClientId, spotifyAuthClientSecret  } = require('./config/config');
const SpotifyStrategy = require('passport-spotify').Strategy;

const app = express();
passport.use(new SpotifyStrategy({
  clientID: spotifyAuthClientId,
  clientSecret: spotifyAuthClientSecret,
  callbackURL: 'http://localhost:8080/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  done(null, profile);
}));

const PORT = process.env.PORT || 8080;

app.listen(PORT);
