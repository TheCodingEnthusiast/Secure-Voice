import "./Password.css"
import React from 'react';
function Password({ onChange }) {

    return (
        <>
            <h3>Password</h3>
            <div className="password-bar">
                <img src="src\assets\key.png" alt="User Icon" className="password-icon" />
                <input type="password" placeholder="Enter your password" onChange={onChange}/>
            </div>

        </>
    );
}


export default Password;
