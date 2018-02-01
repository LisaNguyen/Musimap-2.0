const express = require('express');
const passport = require('passport');
const { spotifyAuthClientId, spotifyAuthClientSecret } = require('./config/config');
const SpotifyStrategy = require('passport-spotify').Strategy;

const PORT = process.env.PORT || 8080;

const app = express();
passport.use(new SpotifyStrategy({
  clientID: spotifyAuthClientId,
  clientSecret: spotifyAuthClientSecret,
  callbackURL: 'http://localhost:8080/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken);
  done(null, accessToken);
}));

app.get('/auth/spotify', passport.authenticate('spotify', {
  scope: ['user-read-email', 'user-read-private']
}));

app.get('/auth/spotify/callback', passport.authenticate('spotify'));

app.listen(PORT);
