import classes from './Register.module.css';
import { useMutation, gql } from '@apollo/client';
import { useRef, useContext } from 'react';
import AuthContext from '../store/auth-ctx';

const USER_LOGIN = gql`
  mutation Mutation($userDetail: LoginUserInput) {
    loginUser(userDetail: $userDetail) {
      firstname
      email
      token
    }
  }
`;

const Login = () => {
  const authCtx = useContext(AuthContext);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [loginUser] = useMutation(USER_LOGIN, {
    update: (
      _,
      {
        data: {
          loginUser: { token },
        },
      },
    ) => {
      authCtx.onLogin(token);
    },
    onError: ({ graphQLErrors }) => {
      console.log(graphQLErrors);
    },
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if ((email !== '' || null) && (password !== '' || null)) {
      loginUser({ variables: { userDetail: { email, password } } });
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
