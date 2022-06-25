import classes from './AccountDetail.module.css';
import Transaction from './Transaction';

const TransactionList = (props) => {
  const trasactionList = props.transactions.map((trans) => (
    <Transaction key={trans.id} {...trans} />
  ));

  return <div className={classes.trans_container}>{trasactionList}</div>;
};

export default TransactionList;
