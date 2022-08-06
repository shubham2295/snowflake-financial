import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Modal from '../../UI/Modal/Modal';
import { CREATE_ACC, GET_ALL_ACCOUNTS } from '../../store/queries';

const NewAccountModal = (props) => {
  const [value, setValue] = useState({});
  const [createAccount] = useMutation(CREATE_ACC, {
    refetchQueries: [{ query: GET_ALL_ACCOUNTS }],
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    createAccount({
      variables: {
        accountDetail: {
          type: value.type,
          name: value.name,
          goal_amount: value.goal_amount ? +value.goal_amount : 0,
          end_date: value.end_date ? new Date(value.end_date) : '',
        },
      },
      onCompleted: (data) => data,
    });
    props.onCloseModal();
  };

  const inputChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <Modal onCloseModal={props.onCloseModal}>
      <form onSubmit={submitFormHandler}>
        <div className='form_body'>
          <h1 className='form_title'>New Account</h1>
          <label htmlFor='type'>Account Type</label>
          <select
            name='type'
            onChange={inputChangeHandler}
            defaultValue='select'
          >
            <option disabled value='select'>
              -- select type --
            </option>
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
            <button type='submit' className='btn done'>
              Confirm
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default NewAccountModal;
