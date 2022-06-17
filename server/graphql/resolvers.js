const Transaction = require('../models/Transaction');

const resolvers = {
  Query: {
    async getTransaction(_, { ID }) {
      return await Transaction.findById(ID);
    },
    async getAllTransactions() {
      return await Transaction.find().sort({ createdAt: -1 });
    }
  },
  Mutation: {
    async createTransaction(_, { transactionDetail: { description, type, amount } }) {
      const createdTransaction = new Transaction({
        description, amount, type,
        createdAt: new Date().toISOString()
      });

      const res = await createdTransaction.save();

      return {
        id: res.id,
        ...res._doc
      };
    },
    async deleteTransaction(_, { ID }) {
      const wasDeleted = (await Transaction.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted;
    }

  }
};

module.exports = resolvers;