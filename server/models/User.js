const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  token: String
});

module.exports = model('User', userSchema);