import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import User from './components/users';
import CounterRedux from './components/CounterRedux';
import EmployeeRedux from './components/EmployeeRedux';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employee' element={<EmployeeRedux/>} />
        <Route path='/counter' element={<CounterRedux/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;