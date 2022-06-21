import React, { useState } from 'react';

//authCtx to manage global data
const AuthContext = React.createContext({
  username: null,
  token: null,
  onLogin: (token, username) => { },
  onLogout: () => { },
});

export const AuthContextProvider = (props) => {


  const initialToken = localStorage.getItem('authToken');
  const initialName = localStorage.getItem('username');
  const [token, setToken] = useState(initialToken);
  const [username, setUsername] = useState(initialName);

  const logoutHandler = () => {
    localStorage.clear();
    setToken(null);
    setUsername(null);
  };

  const loginHandler = (token, username) => {
    setToken(token);
    setUsername(username);
    localStorage.setItem('authToken', token);
    localStorage.setItem('username', username);
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