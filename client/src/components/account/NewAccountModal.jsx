import Modal from '../../UI/Modal/Modal';

const NewAccountModal = (props) => {
  return (
    <Modal onCloseModal={props.onCloseModal}>
      <form>
        <div className='form_body'>
          <h1 className='form_title'>New Account</h1>
          <label htmlFor='type'>Account Type</label>
          <select name='type'>
            <option value='DEBIT'>Debit</option>
            <option value='CREDIT'>Credit</option>
          </select>
          <label htmlFor='description'>Description</label>
          <input type='text' name='name' cols='50' rows='3'></input>
          <label htmlFor='goal amount'>Set Goal (optional)</label>
          <input type='number' name='goal_amount' min='1.00'></input>
          <label htmlFor='date'>Goal Deadline (optional)</label>
          <input type='date' name='end_date'></input>
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
