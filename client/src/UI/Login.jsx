import classes from './Register.module.css';
import { useMutation, gql } from '@apollo/client';
import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-ctx';

const USER_LOGIN = gql`
  mutation Mutation($userDetail: UserInput) {
    loginUser(userDetail: $userDetail) {
      firstname
      email
      token
    }
  }
`;

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const email = emailRef.current?.value;
  const password = passwordRef.current?.value;

  const [loginUser] = useMutation(USER_LOGIN, {
    variables: { userDetail: { email, password } },
    onCompleted: (data) => console.log(data),
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      loginUser();
    }
  };

  return (
    <div className={classes.card}>
      <form className='form_body' onSubmit={formSubmitHandler}>
        <h1 className='form_title'>Login</h1>
        <label htmlFor='email'></label>
        <input
          type='email'
          name='email'
          placeholder='Enter email'
          ref={emailRef}
        />
        <label htmlFor='password'></label>
        <input
          type='password'
          name='password'
          placeholder='Enter password'
          ref={passwordRef}
        />
        <div className='form_body_btn_action'>
          <button type='submit' className='btn done'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
