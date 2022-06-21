import React, { useState } from 'react';
import { useApolloClient } from '@apollo/client';

//authCtx to manage global data
const AuthContext = React.createContext({
  username: null,
  token: null,
  onLogin: (token, username) => { },
  onLogout: () => { },
});

export const AuthContextProvider = (props) => {

  const client = useApolloClient();
  const initialToken = localStorage.getItem('token');
  const initialName = localStorage.getItem('username');
  const [token, setToken] = useState(initialToken);
  const [username, setUsername] = useState(initialName);

  const logoutHandler = () => {
    client.clearStore();
    sessionStorage.clear();
    localStorage.clear();
    setToken(null);
    setUsername(null);
  };

  const loginHandler = () => {
    setToken(localStorage.getItem('token'));
    setUsername(localStorage.getItem('username'));
  };

  return (<AuthContext.Provider
    value={ {
      token,
      username,
      onLogout: logoutHandler,
      onLogin: loginHandler
    } }>{ props.children }</AuthContext.Provider>);

};

export default AuthContext;