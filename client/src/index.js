import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { AuthContextProvider } from './store/auth-ctx';


const client = new ApolloClient({
  uri: 'http://localhost:5000/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
    <ApolloProvider client={ client }>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ApolloProvider>
  </BrowserRouter>

);