import classes from './Account.module.css';
import { Link } from 'react-router-dom';

const Account = (props) => {
  return (
    <Link to={`/accountDetail/?acctId=${props.id}`}>
      <div className={classes.main}>
        <h4 className={classes.bold}> **** 1234</h4>
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
