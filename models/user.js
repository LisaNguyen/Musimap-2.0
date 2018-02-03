const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: 'string',
  email: 'string',
  name: 'string',
  country:'string'
});

mongoose.model('users', userSchema);
