import { gql } from '@apollo/client';

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String) {
    getUserByEmail(email: $email) {
      firstname
      lastname
      accounts {
        id
      }
    }
  }
`;

export const SEND_ETRANSFER = gql`
  mutation SendEtransfer($etransferDetail: EtransferInput) {
    sendEtransfer(etransferDetail: $etransferDetail) {
      id
      account_id
      description
      type
      createdAt
      amount
    }
  }
`;

export const GET_ACCOUNT_DETAILS = gql`
  query Query($accountId: ID!) {
    getAccountDetailAndTransactions(accountId: $accountId) {
      account {
        type
        acc_number
        name
        balance
        goal_amount
      }
      transactions {
        id
        description
        type
        createdAt
        amount
      }
    }
  }
`;

export const CREATE_ACC = gql`
  mutation Mutation($accountDetail: CreateAccountInput) {
    createAccount(accountDetail: $accountDetail) {
      id
      user_id
      acc_number
      type
      name
      balance
      goal_amount
    }
  }
`;

export const GET_ALL_ACCOUNTS = gql`
  query Query {
    getAllAccounts {
      id
      acc_number
      type
      name
      balance
      goal_amount
      end_date
      is_freeze
    }
  }
`;

export const DEPOSIT_MONEY = gql`
  mutation Mutation($transactionDetail: TransactionInput) {
    createTransaction(transactionDetail: $transactionDetail) {
      id
      account_id
      description
      type
      createdAt
      amount
    }
  }
`;