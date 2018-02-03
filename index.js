const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const { mongoURI, cookieKey } = require('./config/config');
require('./models/user');
require('./services/passport');

mongoose.promise = global.Promise;
mongoose.connect(mongoURI);

const PORT = process.env.PORT || 8080;
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);

//tells passport to make use of cookies for authentication
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(PORT);
