const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/spotify', passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private']
  }));

  app.get('/auth/spotify/callback', passport.authenticate('spotify'));
};
