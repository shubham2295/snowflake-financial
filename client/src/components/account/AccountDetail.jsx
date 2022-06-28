import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import classes from './AccountDetail.module.css';
import TransactionList from './TransactionList';
import DepositModal from './DepositModal';
import EtransferModal from './EtransferModal';

const GET_ACCOUNT_DETAILS = gql`
  query Query($accountId: ID!) {
    getAccountDetailAndTransactions(accountId: $accountId) {
      account {
        type
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

const AccountDetail = () => {
  const [depositModalVisible, setDepositModalVisible] = useState(false);
  const [sendEtransferModalVisible, setSendEtransferModalVisible] =
    useState(false);
  const [searchParams] = useSearchParams();
  let accountId = searchParams.get('acctId');

  const { data, loading, error } = useQuery(GET_ACCOUNT_DETAILS, {
    variables: { accountId },
  });

  console.log(data);

  return (
    <div className={classes.container}>
      <h1 className={classes.account_title}>
        {data?.getAccountDetailAndTransactions?.account?.name}
      </h1>
      <h4 className={classes.account_balance}>Total Balance</h4>
      <h2>$ {data?.getAccountDetailAndTransactions?.account?.balance}</h2>
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
      <TransactionList
        transactions={data?.getAccountDetailAndTransactions?.transactions}
      />
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
