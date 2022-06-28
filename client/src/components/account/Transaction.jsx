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
            {props.createdAt.substring(0, 15)}
          </div>
        </div>
      </div>
      <div className={props.type === 'CREDIT' ? `${classes.grn}` : ''}>{`${
        props.type === 'CREDIT' ? '$' : '-$'
      }${props.amount}`}</div>
    </div>
  );
};

export default Transaction;
