const Account = require('../models/Account');
const User = require('../models/User');
const accountResolver = {

  Query: {

  },

  Mutation: {

    createAccount: async (_, { accountDetail: { type, name, goal_amount, end_date } }, { userId }) => {

      const account = new Account({
        user_id: userId,
        type,
        name,
      });

      const res = await account.save();

      const user = await User.findByIdAndUpdate(userId, {
        $push: { accounts: res._id }
      });

      return res;

    }

  }
};

module.exports = accountResolver;