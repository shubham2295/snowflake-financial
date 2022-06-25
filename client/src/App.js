import { Routes, Route } from 'react-router-dom';
import Navbar from "./UI/Navbar";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Account from './components/account/Account';
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/account' element={ <Account /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
    </ >
  );
}

export default App;
