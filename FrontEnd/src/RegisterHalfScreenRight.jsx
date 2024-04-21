import React from 'react';
import './RegisterHalfScreenRight.css'
import Username from "./Username";
import PasswordSet from "./PasswordSet";
function RegisterHalfScreenLeft() {
 return (
    <>
    
    <div className="half-screen-left">
        <h1 id="SoundSign">SoundSign Up</h1>
        <h2>Register With Your Voice</h2>
        <Username/>
        <PasswordSet/>
    
    </div>
    
    
    
    </>
 );
}

export default RegisterHalfScreenLeft;




