import { Routes, Route } from 'react-router-dom';
import Navbar from "./UI/Navbar";
import Account from './components/account/Account';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/account' element={ <Account /> } />
      </Routes>
    </>
  );
}

export default App;
