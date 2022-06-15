import classes from './Account.module.css';
import TransactionList from './TransactionList';
import transctions from '../deno/transactions';

const Account = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.account_title}>Saving Account</h1>
      <h4 className={classes.account_balance}>Total Balance</h4>
      <h2>$1234.56</h2>
      <div className={classes.btn_actions}>
        <button className={`${classes['button-52']} ${classes.mr}`}>
          + Fund
        </button>
        <button className={classes['button-52']}>- Send</button>
      </div>
      <TransactionList transactions={transctions} />
    </div>
  );
};

export default Account;
