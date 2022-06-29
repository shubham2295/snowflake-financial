import classes from './Account.module.css';
import { Link } from 'react-router-dom';

const Account = (props) => {
  console.log(props);
  return (
    <Link to={`/accountDetail/?acctId=${props.id}`}>
      <div className={classes.main}>
        <h4 className={classes.bold}>
          {props.acc_number
            ? props?.acc_number?.toString().slice(-4).padStart(16, '*')
            : '****'}
        </h4>
        <div>
          <p>{props.name}</p>
          <p className={classes.small_title}>{props.type}</p>
        </div>

        <div className={classes.bottom}>
          <div>
            <p>Balance</p>
            <span className={classes.balance}>$ {props.balance}</span>
          </div>
          {props.goal_amount ? (
            <div>
              <p>Goal</p>
              <span className={classes.small_title}>$ {props.goal_amount}</span>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Link>
  );
};

export default Account;
