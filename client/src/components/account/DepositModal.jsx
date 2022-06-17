import Modal from '../../UI/Modal/Modal';

const DepositModal = (props) => {
  return (
    <Modal onCloseModal={props.onCloseModal}>
      <form>
        <div className='form_body'>
          <h1 className='form_title'>Add Money</h1>
          <label htmlFor='description'>Description</label>
          <input type='text' name='description'></input>
          <label htmlFor='amount'>Amount</label>
          <input type='number' name='amount' min='1.00'></input>
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
