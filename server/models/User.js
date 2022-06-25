const { model, Schema } = require('mongoose');
const Account = require('./Account');

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, unique: true, lowercase: true },
  password: String,
  accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }]
});

module.exports = model('User', userSchema);