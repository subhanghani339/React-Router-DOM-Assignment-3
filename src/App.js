
import './App.css';
import Signup from './Components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Components/Login';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/' element={<Signup/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
