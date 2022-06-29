import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import Modal from '../../UI/Modal/Modal';

const CREATE_ACC = gql`
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

const NewAccountModal = (props) => {
  const [value, setValue] = useState({});

  const [createAccount] = useMutation(CREATE_ACC);

  const submitFormHandler = (e) => {
    e.preventDefault();
    createAccount({
      variables: {
        accountDetail: {
          type: value.type,
          name: value.name,
          goal_amount: value.goal ? +value.goal_amount : '',
          end_date: value.end_date ? new Date(value.end_date) : '',
        },
      },
      onCompleted: (data) => console.log(data),
    });
    props.onCloseModal();
  };

  const inputChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
  };

  return (
    <Modal onCloseModal={props.onCloseModal}>
      <form onSubmit={submitFormHandler}>
        <div className='form_body'>
          <h1 className='form_title'>New Account</h1>
          <label htmlFor='type'>Account Type</label>
          <select name='type' onChange={inputChangeHandler}>
            <option value='DEBIT'>Debit</option>
            <option value='CREDIT'>Credit</option>
          </select>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            name='name'
            cols='50'
            rows='3'
            onChange={inputChangeHandler}
          ></input>
          <label htmlFor='goal amount'>Set Goal (optional)</label>
          <input
            type='number'
            name='goal_amount'
            min='1.00'
            step='0.01'
            onChange={inputChangeHandler}
          ></input>
          <label htmlFor='date'>Goal Deadline (optional)</label>
          <input
            type='date'
            name='end_date'
            onChange={inputChangeHandler}
          ></input>
          <div className='form_body_btn_action'>
            <button className='btn cancel' onClick={props.onCloseModal}>
              Cancel
            </button>
            <button className='btn done'>Confirm</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default NewAccountModal;
