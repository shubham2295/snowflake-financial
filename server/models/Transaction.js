const { model, Schema } = require('mongoose');

const transactionSchema = new Schema({
  description: String,
  type: String,
  createdAt: String,
  amount: Number
});

module.exports = model('Transaction', transactionSchema);