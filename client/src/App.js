import { Routes, Route } from 'react-router-dom';
import Navbar from "./UI/Navbar";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AccountDetail from './components/account/AccountDetail';
import Welcome from './pages/Welcome';
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Welcome /> } />
        <Route path='accounts' element={ <Home /> } />
        <Route path='accountDetail' element={ <AccountDetail /> } />
        <Route path='login' element={ <Login /> } />
        <Route path='register' element={ <Register /> } />
      </Routes>
    </ >
  );
}

export default App;
