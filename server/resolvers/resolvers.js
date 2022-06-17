const transactionResolver = require('./transaction');
const userResolver = require('./user');

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...transactionResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...transactionResolver.Mutation
  }
};

module.exports = resolvers;