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
        {authCtx.user && <li>Hello {authCtx.user.firstname} </li>}
        {authCtx.user && <li>My Accounts</li>}
        {!authCtx.user && (
          <>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Register</NavLink>
            </li>
          </>
        )}
        {authCtx.user && (
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
