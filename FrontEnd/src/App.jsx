import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import "./App.css";

function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/register" element={<Register />}/>
       
       </Routes>
     </Router>
  );
 }
 
 export default App;
 