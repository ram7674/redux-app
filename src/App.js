import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Employee from './components/employee';
import User from './components/users';
import Counter from './components/counter';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employee' element={<Employee/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;