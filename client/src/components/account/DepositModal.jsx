import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import { GET_ACCOUNT_DETAILS, DEPOSIT_MONEY } from '../../store/queries';

const DepositModal = (props) => {
  const [value, setValue] = useState({});
  const [submitDeposit] = useMutation(DEPOSIT_MONEY, {
    refetchQueries: [
      { query: GET_ACCOUNT_DETAILS, variables: { accountId: props.accId } },
    ],
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
