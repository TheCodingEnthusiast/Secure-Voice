import React from 'react';
import RegisterHalfScreenRight from './RegisterHalfScreenRight';
import RegisterHalfScreenLeft from './RegisterHalfScreenLeft';
import './Login.css';

function Register() {
 return (
    <div className="container">
       
      <RegisterHalfScreenLeft />
      <RegisterHalfScreenRight />
      
    </div>
 );
}

export default Register;
