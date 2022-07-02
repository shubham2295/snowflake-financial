import { useQuery } from '@apollo/client';
import { useState } from 'react';
import AccountList from '../components/account/AccountList';
import NewAccountModal from '../components/account/NewAccountModal';
import classes from './Home.module.css';
import { GET_ALL_ACCOUNTS } from '../store/queries';

const Home = () => {
  const { data } = useQuery(GET_ALL_ACCOUNTS, {
    fetchPolicy: 'network-only',
  });

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className={classes.main_container}>
      {data?.getAllAccounts.length ? (
        <AccountList accounts={data?.getAllAccounts} />
      ) : (
        ''
      )}
      <div className={classes.new} onClick={() => setModalVisible(true)}>
        <div>
          <p>+</p>
          <p>Create</p>
          <p>New Account</p>
        </div>
      </div>
      {modalVisible && (
        <NewAccountModal onCloseModal={() => setModalVisible(false)} />
      )}
    </div>
  );
};

export default Home;
