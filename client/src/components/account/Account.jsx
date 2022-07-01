import classes from './Account.module.css';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Account = (props) => {
  const goalPercent = props.goal_amount
    ? Math.floor((props.balance / props.goal_amount) * 100)
    : null;

  return (
    <Link to={`/accountDetail/?acctId=${props.id}`}>
      <div className={classes.main}>
        <h4 className={classes.bold}>
          {props.acc_number
            ? props?.acc_number?.toString().slice(-4).padStart(16, '*')
            : '****'}
        </h4>
        <div className={classes.bottom}>
          <div>
            <p>{props.name}</p>
            <p className={classes.small_title}>{props.type}</p>
          </div>
          {props.goal_amount && props.balance ? (
            <div className={classes.circle}>
              <CircularProgressbar
                value={goalPercent}
                text={goalPercent >= 100 ? '✔️' : goalPercent + '%'}
                styles={buildStyles({
                  pathColor: `#76BA99`,
                  textColor: `#646fd4`,
                })}
              />
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={classes.bottom}>
          <div>
            <p>Balance</p>
            <span className={classes.balance}>
              $ {props.balance.toFixed(2)}
            </span>
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
