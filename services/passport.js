const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const { spotifyAuthClientId, spotifyAuthClientSecret } = require('../config/config');

passport.use(new SpotifyStrategy({
  clientID: spotifyAuthClientId,
  clientSecret: spotifyAuthClientSecret,
  callbackURL: 'http://localhost:8080/auth/spotify/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken);
}));
