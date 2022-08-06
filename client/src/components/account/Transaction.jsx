import classes from './AccountDetail.module.css';

const Transaction = (props) => {
  return (
    <div className={classes.transaction}>
      <div className={classes.trans_details}>
        <div className={`${classes.trans_image} ${classes[props.type]}`}>
          🪙
        </div>
        <div>
          <div className={classes.trans_desc}>{props.description}</div>
          <div className={classes.trans_date}>
            {new Date(props.createdAt).toString().substring(0, 15)}
          </div>
        </div>
      </div>
      <div className={props.type === 'CREDIT' ? `${classes.grn}` : ''}>{`${
        props.type === 'CREDIT' ? '$' : '-$'
      }${Math.abs(props.amount).toFixed(2)}`}</div>
    </div>
  );
};

export default Transaction;
