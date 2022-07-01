import { useState, useContext } from 'react';
import Modal from '../../UI/Modal/Modal';
import classes from './AccountDetail.module.css';
import { useMutation, useLazyQuery, gql } from '@apollo/client';
import AuthContext from '../../store/auth-ctx';

const GET_USER_BY_EMAIL = gql`
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

const SEND_ETRANSFER = gql`
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

const EtransferModal = (props) => {
  const {
    user: { firstname, lastname },
  } = useContext(AuthContext);
  const [value, setValue] = useState({});
  const [getUser, { called, data }] = useLazyQuery(GET_USER_BY_EMAIL);
  const [sendEtransfer] = useMutation(SEND_ETRANSFER, {
    refetchQueries: [
      { query: GET_ACCOUNT_DETAILS, variables: { accountId: props.accId } },
    ],
  });

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (value.amount < props.accBalance) {
      sendEtransfer({
        variables: {
          etransferDetail: {
            recipient_accountId: data?.getUserByEmail?.accounts[0]?.id,
            msg: value.message,
            amount: +value.amount,
            accountId: props.accId,
            recipient_name: `${data?.getUserByEmail?.firstname} ${data?.getUserByEmail?.lastname}`,
            sender_name: `${firstname} ${lastname}`,
          },
        },
        onCompleted: (data) => console.log(data),
      });
    }

    props.onCloseModal();
  };

  const inputChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <Modal onCloseModal={props.onCloseModal}>
      <form onSubmit={submitFormHandler}>
        <div className='form_body'>
          <h1 className='form_title'>Send Money</h1>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            onChange={inputChangeHandler}
            onBlur={() => {
              getUser({
                variables: {
                  email: value.email,
                },
                onCompleted: (data) => console.log(data),
              });
            }}
          ></input>
          {data?.getUserByEmail ? (
            <p className={classes.alert_success}>
              <span className={classes.username}>
                {`${data?.getUserByEmail?.firstname} ${data?.getUserByEmail?.lastname} `}
              </span>
              has autodeposit. You won't need to create a security question or
              answer.
            </p>
          ) : called ? (
            <p className={classes.alert_warning}>
              Please check the email. No user exists with this email.
            </p>
          ) : (
            ''
          )}
          <label htmlFor='message'>Message</label>
          <input
            type='text'
            name='message'
            cols='50'
            rows='3'
            onChange={inputChangeHandler}
          ></input>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            name='amount'
            min='1.00'
            step='0.01'
            onChange={inputChangeHandler}
          ></input>
          {value.amount > props.accBalance ? (
            <p className={classes.alert_warning}>
              Low balance. Please select other account to transfer money.
            </p>
          ) : (
            ''
          )}
          <div className='form_body_btn_action'>
            <button className='btn cancel' onClick={props.onCloseModal}>
              Cancel
            </button>
            <button type='submit' className='btn done'>
              Send
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EtransferModal;
