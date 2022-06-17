import { Routes, Route } from 'react-router-dom';
import Navbar from "./UI/Navbar";
import Login from './UI/Login';
import Account from './components/account/Account';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/account' element={ <Account /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </>
  );
}

export default App;
