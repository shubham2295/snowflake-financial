import { useState, useContext } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { REGISTER_USER, GET_USER_BY_EMAIL } from '../store/queries';
import classes from './Register.module.css';
import AuthContext from '../store/auth-ctx';

const Register = () => {
  const authCtx = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [isEmailExist, { data }] = useLazyQuery(GET_USER_BY_EMAIL);

  const [registerUser] = useMutation(REGISTER_USER, {
    variables: { userDetail: { ...user } },
    update: (
      _,
      {
        data: {
          registerUser: { token },
        },
      },
    ) => {
      authCtx.onLogin(token);
    },
    onError: ({ graphQLErrors }) => {
      console.log(graphQLErrors);
    },
  });

  const checkEmail = () => {
    isEmailExist({
      variables: {
        email: user.email,
      },
    });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    registerUser();
  };
  return (
    <div className={classes.card}>
      <form className='form_body' onSubmit={formSubmitHandler}>
        <h1 className='form_title'>Register</h1>
        <label htmlFor='firstname'></label>
        <input
          type='text'
          name='firstname'
          placeholder='First name'
          onChange={handleChange}
        />
        <label htmlFor='lastname'></label>
        <input
          type='text'
          name='lastname'
          placeholder='Last name'
          onChange={handleChange}
        />
        <label htmlFor='email'></label>
        <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          onBlur={checkEmail}
        />
        {data?.getUserByEmail && (
          <p className={classes.alert_warning}>
            Email already in use. Please use other email address to sign up.
          </p>
        )}
        <label htmlFor='password'></label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
        />
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
