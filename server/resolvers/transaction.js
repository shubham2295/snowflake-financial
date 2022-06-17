const Transaction = require('../models/Transaction');

const transactionResolver = {

  Query: {
    getTransaction: async (_, { ID }) => {
      return await Transaction.findById(ID);
    },
    getAllTransactions: async () => {
      return await Transaction.find().sort({ createdAt: -1 });
    }
  },

  Mutation: {
    createTransaction: async (_, { transactionDetail: { description, type, amount } }) => {
      const createdTransaction = new Transaction({
        description, amount, type,
        createdAt: new Date().toISOString()
      });

      const res = await createdTransaction.save();
      console.log(res);
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