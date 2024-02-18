
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/LoginPage/Login';
import Register from './components/RegisterPage/Register';
import Home from './components/HomePage/Home';
import { useState } from 'react';
function App() {
  return (
    <div>

<Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
           
      </Routes>
    </Router>
   
    </div>
   
  );
}

export default App;

