const { gql } = require('apollo-server');

const typeDefs = gql`

  type User{
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    token: String
    accounts: [Account!]
  }

  enum AccountType{
    DEBIT,
    CREDIT
  }

  type Account{
    id: ID!
    user_id: ID!
    type: AccountType!
    name: String!
    balance: Float
    goal_amount: Float
    start_date: String
    end_date: String
    is_freeze: Boolean
  }

  type Transaction{
    id: ID!
    account_id: ID!
    description: String
    type: String
    createdAt: String
    amount: Float
  }

  input RegisterUserInput{
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }

  input LoginUserInput{
    email: String!
    password: String!
  }

  input CreateAccountInput{
    type: AccountType!
    name: String!  
    goal_amount: Float   
    end_date: String  
  }

  input TransactionInput{
    account_id: String!
    description: String!
    type: String!
    amount: Float!
  }

  type Query{
    getUserById(ID: ID!): User!

    getTransaction(ID: ID!): Transaction!
    getAllTransactions: [Transaction!]!
    getAllTransactionsForAccountById(accountId: ID!): [Transaction]
  }

  type Mutation{
    registerUser(userDetail: RegisterUserInput): User!
    loginUser(userDetail: LoginUserInput): User!
    deleteAllUsers: Boolean

    createAccount(accountDetail: CreateAccountInput): Account!

    createTransaction(transactionDetail: TransactionInput ) : Transaction!
    deleteTransaction(ID: ID!): Boolean
  }
`;

module.exports = typeDefs;