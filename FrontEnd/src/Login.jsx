import React from 'react';
import HalfScreenRight from './HalfScreenRight';
import HalfScreenLeft from './HalfScreenLeft';
import './Login.css';

function Login() {
 return (
    <div className="container">
      <HalfScreenLeft />
      <HalfScreenRight />
      
    </div>
 );
}

export default Login;
