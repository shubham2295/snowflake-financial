import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import Modal from '../../UI/Modal/Modal';

const DEPOSIT_MONEY = gql`
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

const GET_ACCOUNT_DETAILS = gql`
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

const DepositModal = (props) => {
  const [value, setValue] = useState({});
  const [submitDeposit] = useMutation(DEPOSIT_MONEY, {
    update: (cache, { data }) => {
      const newTransResponse = data?.createTransaction;
      const existingTrans = cache.readQuery({
        query: GET_ACCOUNT_DETAILS,
        variables: { accountId: props.accId },
      });
      console.log(newTransResponse);
      console.log(existingTrans);
      if (newTransResponse && existingTrans) {
        cache.writeQuery({
          query: GET_ACCOUNT_DETAILS,
          data: {
            getAccountDetailAndTransactions: {
              account: existingTrans?.getAccountDetailAndTransactions?.account,
              transactions: [
                newTransResponse,
                ...existingTrans?.getAccountDetailAndTransactions?.transactions,
              ],
            },
          },
        });
      }
    },
  });

  const inputChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    submitDeposit({
      variables: {
        transactionDetail: {
          account_id: props.accId,
          type: 'CREDIT',
          description: value.description,
          amount: +value.amount,
        },
      },
    });
    props.onCloseModal();
  };

  return (
    <Modal onCloseModal={props.onCloseModal}>
      <form onSubmit={submitFormHandler}>
        <div className='form_body'>
          <h1 className='form_title'>Add Money</h1>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='description'
            onChange={inputChangeHandler}
          ></input>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            name='amount'
            min='1'
            step='0.01'
            onChange={inputChangeHandler}
          ></input>
          <div className='form_body_btn_action'>
            <button className='btn cancel' onClick={props.onCloseModal}>
              Cancel
            </button>
            <button className='btn done'>Submit</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default DepositModal;
