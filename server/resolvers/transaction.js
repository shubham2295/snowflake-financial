const Transaction = require('../models/Transaction');

const transactionResolver = {

  Query: {
    getTransaction: async (_, { ID }) => {
      return await Transaction.findById(ID);
    },
    getAllTransactions: async (_, __, { userId }) => {
      return await Transaction.find().sort({ createdAt: -1 });
    },
    getAllTransactionsForAccountById: async (_, { accountId }, { userId }) => {

      return await Transaction.find({ account_id: accountId }).sort({ createdAt: -1 });

    }
  },

  Mutation: {
    createTransaction: async (_, { transactionDetail: { account_id, description, type, amount } }) => {
      const createdTransaction = new Transaction({
        description, amount, type, account_id
      });

      const res = await createdTransaction.save();

      return {
        id: res.id,
        ...res._doc
      };
    },
    deleteTransaction: async (_, { ID }) => {
      const wasDeleted = (await Transaction.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted;
    }

  }
};

module.exports = transactionResolver;