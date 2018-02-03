const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const { spotifyAuthClientId, spotifyAuthClientSecret } = require('../config/config');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {done(null, user);});
});

passport.use(new SpotifyStrategy({
  clientID: spotifyAuthClientId,
  clientSecret: spotifyAuthClientSecret,
  callbackURL: 'http://localhost:8080/auth/spotify/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({userId: profile.id}).then(user => {
    if (!user) {
      new User({
        userId: profile._json.id,
        email: profile._json.email,
        name: profile._json.display_name,
        country: profile._json.country
      }).save().then(user => done(null, user));
    } else {
      done(null, user);
    }
  });
}));
