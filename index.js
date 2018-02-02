const express = require('express');
const passport = require('passport');
require('./services/passport');

const PORT = process.env.PORT || 8080;
const app = express();

require('./routes/authRoutes')(app);

app.listen(PORT);
