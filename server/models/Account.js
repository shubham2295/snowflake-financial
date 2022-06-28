const { Schema, model, Types } = require('mongoose');


const accountSchema = new Schema({
  user_id: { type: Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['CREDIT', 'DEBIT'] },
  name: String,
  balance: { type: Number, default: 0.00 },
  goal_amount: { type: Number, default: null },
  start_date: { type: String, default: new Date().toISOString() },
  end_date: { type: String, default: null },
  is_freeze: { type: Boolean, default: false },
});

accountSchema.statics = {
  get: function(_id) {
    return this.findOne({ _id }).exec();
  }
};

module.exports = model('Account', accountSchema);