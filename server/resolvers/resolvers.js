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
  }
};

module.exports = resolvers;