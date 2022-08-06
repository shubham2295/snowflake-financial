const { model, Schema, Types } = require('mongoose');
const Account = require('./Account');


const transactionSchema = new Schema({
  account_id: { type: Types.ObjectId, ref: 'Account' },
  description: String,
  type: { type: String, enum: ['CREDIT', 'DEBIT'] },
  createdAt: { type: String, default: new Date().toISOString() },
  amount: { type: Number, Min: 0.00 }
});

// updates account total balnce after each transaction
transactionSchema.post('save', async (doc) => {

  const currentAccount = await Account.get(doc.account_id);
  currentAccount.balance += doc.amount;
  currentAccount.save();

});

module.exports = model('Transaction', transactionSchema);