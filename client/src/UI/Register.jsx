import classes from './Register.module.css';
import { useMutation, gql } from '@apollo/client';
import { useState, useContext } from 'react';
import AuthContext from '../store/auth-ctx';
import { useNavigate } from 'react-router-dom';

const REGISTER_USER = gql`
  mutation RegisterUser($userDetail: RegisterUserInput) {
    registerUser(userDetail: $userDetail) {
      firstname
      token
    }
  }
`;

const Register = () => {
  const authCtx = useContext(AuthContext);

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

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
        />
        <label htmlFor='password'></label>
        <input
          type='text'
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
