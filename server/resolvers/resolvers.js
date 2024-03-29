const transactionResolver = require('./transaction');
const userResolver = require('./user');
const accountResolver = require('./account');

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...transactionResolver.Query,
    ...accountResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...transactionResolver.Mutation,
    ...accountResolver.Mutation
  },
  AccountDetail: {
    __resolveType: object => {

      if (object.accountDetail.balance) {
        return 'Account';
      }
      if (Array.isArray(object.transactions)) {
        return 'Transaction';
      }
      return null;
    }
  }
};

module.exports = resolvers;