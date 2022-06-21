import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

//authCtx to manage global data
const AuthContext = React.createContext({
  user: null,
  onLogin: (token) => { },
  onLogout: () => { },
});

/* if (localStorage.getItem('authToken')) {
  const decodedToken = jwtDecode(localStorage.getItem('authToken'));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.clear();
  } else {
    AuthContext.user = decodedToken;
  }

} */

export const AuthContextProvider = (props) => {

  const navigate = useNavigate();
  const initialToken = localStorage.getItem('authToken');
  const initialUserInfo = initialToken ? jwtDecode(initialToken) : null;
  const [user, setUser] = useState(initialUserInfo);


  const logoutHandler = () => {
    localStorage.clear();
    setUser(null);
    navigate('/login');
  };

  const loginHandler = (token) => {
    setUser(jwtDecode(token));
    localStorage.setItem('authToken', token);
    navigate('/account');
  };

  return (<AuthContext.Provider
    value={ {
      user,
      onLogout: logoutHandler,
      onLogin: loginHandler
    } }>{ props.children }</AuthContext.Provider>);

};

export default AuthContext;