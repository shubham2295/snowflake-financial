import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../store/auth-ctx';

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  return (
    <nav className={classes.navbar}>
      <h1>❄️</h1>
      <ul className={classes.navlinks}>
        {authCtx.token && <li>Hello {authCtx.username} </li>}
        {authCtx.token && <li>My Accounts</li>}
        {!authCtx.token && (
          <>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>
          </>
        )}
        {authCtx.token && (
          <li>
            <button className={classes.btn} onClick={authCtx.onLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
