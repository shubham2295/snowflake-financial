import Account from './Account';

const AccountList = (props) => {
  const accountList = props.accounts.map((account) => (
    <Account {...account} key={account.id} />
  ));

  return <>{accountList}</>;
};

export default AccountList;
