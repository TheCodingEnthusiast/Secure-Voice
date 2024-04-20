import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Wait from './Wait';
import "./App.css";

function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="wait-page" element={<Wait />} />
       </Routes>
     </Router>
  );
 }
 
 export default App;
 