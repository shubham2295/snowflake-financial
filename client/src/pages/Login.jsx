import classes from './Register.module.css';
import AuthContext from '../store/auth-ctx';
import { USER_LOGIN } from '../store/queries';
import { useMutation } from '@apollo/client';
import { useRef, useContext } from 'react';

const Login = () => {
  const authCtx = useContext(AuthContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [loginUser, { loading }] = useMutation(USER_LOGIN, {
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
    onError: ({ graphQLErrors }) => graphQLErrors,
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
          {loading ? (
            <img
              className={classes.loader}
              src='/images/rings.svg'
              alt='loader'
            />
          ) : (
            <button type='submit' className='btn done'>
              Login
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
