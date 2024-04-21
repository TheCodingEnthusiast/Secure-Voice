import React from 'react';
import LoginHalfScreenRight from './LoginHalfScreenRight';
import LoginHalfScreenLeft from './LoginHalfScreenLeft';
import './Login.css';

function Login() {
 return (
    <div className="container">
      <LoginHalfScreenLeft />
      <LoginHalfScreenRight />
      
    </div>
 );
}

export default Login;
