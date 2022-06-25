const { model, Schema, Types } = require('mongoose');

const transactionSchema = new Schema({
  account_id: { type: Types.ObjectId, ref: 'Account' },
  description: String,
  type: { type: String, enum: ['CREDIT', 'DEBIT'] },
  createdAt: { type: String, default: new Date().toISOString() },
  amount: { type: Number, Min: 0.00 }
});

module.exports = model('Transaction', transactionSchema);