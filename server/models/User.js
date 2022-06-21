const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true },
  password: String,
  token: String
});

module.exports = model('User', userSchema);