import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <h1>❄️</h1>
      <ul className={classes.navlinks}>
        <li>My Accounts</li>
        <li>Profile</li>
        <li>
          <button className={classes.btn}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
