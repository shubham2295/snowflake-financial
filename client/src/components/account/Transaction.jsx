import classes from './Account.module.css';

const Transaction = (props) => {
  return (
    <div className={classes.transaction}>
      <div className={classes.trans_details}>
        <div className={classes.trans_image}>🪙</div>
        <div>
          <div className={classes.trans_desc}>{props.description}</div>
          <div className={classes.trans_date}>{props.date}</div>
        </div>
      </div>
      <div>{`${props.type === 'Credit' ? '$' : '-$'}${props.amount}`}</div>
    </div>
  );
};

export default Transaction;
