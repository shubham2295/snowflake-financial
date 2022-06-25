import classes from './AccountDetail.module.css';
import TransactionList from './TransactionList';
import transctions from '../deno/transactions';
import { useState } from 'react';
import DepositModal from './DepositModal';
import EtransferModal from './EtransferModal';

const AccountDetail = () => {
  const [depositModalVisible, setDepositModalVisible] = useState(false);
  const [sendEtransferModalVisible, setSendEtransferModalVisible] =
    useState(false);

  return (
    <div className={classes.container}>
      <h1 className={classes.account_title}>Saving Account</h1>
      <h4 className={classes.account_balance}>Total Balance</h4>
      <h2>$1234.56</h2>
      <div className={classes.btn_actions}>
        <button className='btn' onClick={() => setDepositModalVisible(true)}>
          + Fund
        </button>
        <button
          className='btn'
          onClick={() => setSendEtransferModalVisible(true)}
        >
          - Send
        </button>
      </div>
      <TransactionList transactions={transctions} />
      {depositModalVisible && (
        <DepositModal onCloseModal={() => setDepositModalVisible(false)} />
      )}
      {sendEtransferModalVisible && (
        <EtransferModal
          onCloseModal={() => setSendEtransferModalVisible(false)}
        />
      )}
    </div>
  );
};

export default AccountDetail;
