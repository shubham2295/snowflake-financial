import Modal from '../../UI/Modal/Modal';

const EtransferModal = (props) => {
  return (
    <Modal onCloseModal={props.onCloseModal}>
      <form>
        <div className='form_body'>
          <h1 className='form_title'>Send Money</h1>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email'></input>
          <label htmlFor='message'>Message</label>
          <input type='text' name='message' cols='50' rows='3'></input>
          <label htmlFor='amount'>Amount</label>
          <input type='number' name='amount' min='1.00'></input>
          <div className='form_body_btn_action'>
            <button className='btn cancel' onClick={props.onCloseModal}>
              Cancel
            </button>
            <button className='btn done'>Send</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EtransferModal;
