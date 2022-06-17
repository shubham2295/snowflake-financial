const { gql } = require('apollo-server');

const typeDefs = gql`
  type Transaction{
    ID: ID
    description: String
    type: String
    createdAt: String
    amount: Float
  }

  input TransactionInput{
    description: String
    type: String
    amount: Float
  }

  type Query{
    getTransaction(ID: ID!): Transaction!
    getAllTransactions: [Transaction!]!
  }

  type Mutation{
    createTransaction(transactionDetail: TransactionInput ) : Transaction!
    deleteTransaction(ID: ID!): Boolean
  }
`;

module.exports = typeDefs;