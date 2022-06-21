const { gql } = require('apollo-server');

const typeDefs = gql`

  type User{
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    token: String
  }

  type Transaction{
    id: ID!
    description: String
    type: String
    createdAt: String
    amount: Float
  }

  input UserInput{
    firstname: String
    lastname: String
    email: String
    password: String
  }

  input TransactionInput{
    description: String
    type: String
    amount: Float
  }

  type Query{
    getUserById(ID: ID!): User!
    getTransaction(ID: ID!): Transaction!
    getAllTransactions: [Transaction!]!

  }

  type Mutation{
    registerUser(userDetail: UserInput): User!
    loginUser(userDetail: UserInput): User!
    deleteAllUsers: Boolean
    createTransaction(transactionDetail: TransactionInput ) : Transaction!
    deleteTransaction(ID: ID!): Boolean

  }
`;

module.exports = typeDefs;