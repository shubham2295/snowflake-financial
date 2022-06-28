const Account = require('../models/Account');
const User = require('../models/User');
const accountResolver = {

  Query: {

    getAllAccounts: async (_, __, { userId }) => {
      console.log('userId from get allacc', userId);
      const accounts = await Account.find({ user_id: userId });
      console.log('find account result', accounts);
      return accounts;
    }

  },

  Mutation: {

    createAccount: async (_, { accountDetail: { type, name, goal_amount, end_date } }, { userId }) => {

      const account = new Account({
        user_id: userId,
        type,
        name,
        goal_amount,
        end_date
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