import "./Password.css"
import React from 'react';

function Password() {

    return (
        <>
            <h3>Password</h3>
            <div className="password-bar">
                <img src="src\assets\key.png" alt="User Icon" className="password-icon" />
                <input type="text" placeholder="Enter your password" />
            </div>
        </>
    );
}


export default Password;
