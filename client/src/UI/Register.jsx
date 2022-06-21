import classes from './Register.module.css';

const Register = () => {
  return (
    <div className={classes.card}>
      <form className='form_body'>
        <h1 className='form_title'>Register</h1>
        <label htmlFor='firstname'></label>
        <input type='text' name='firstname' placeholder='First name' />
        <label htmlFor='lastname'></label>
        <input type='text' name='lastname' placeholder='Last name' />
        <label htmlFor='email'></label>
        <input type='email' name='email' placeholder='Email' />
        <label htmlFor='password'></label>
        <input type='text' name='password' placeholder='Password' />
        <div className='form_body_btn_action'>
          <button type='submit' className='btn done'>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
