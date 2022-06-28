const { model, Schema, Types } = require('mongoose');
const Account = require('./Account');


const transactionSchema = new Schema({
  account_id: { type: Types.ObjectId, ref: 'Account' },
  description: String,
  type: { type: String, enum: ['CREDIT', 'DEBIT'] },
  createdAt: { type: String, default: new Date() },
  amount: { type: Number, Min: 0.00 }
});

transactionSchema.post('save', async (doc) => {

  const currentAccount = await Account.get(doc.account_id);
  currentAccount.balance += doc.amount;
  currentAccount.save();

});

module.exports = model('Transaction', transactionSchema);