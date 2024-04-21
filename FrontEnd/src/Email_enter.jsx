import React from 'react';
import './Username.css'; 

function Email_enter({ onChange }) {
    return (
        <>
            <h3>Email</h3>
            <div className="username-bar">
                <img src="src\assets\UserImage.png" alt="User Icon" className="user-icon" />
                <input type="email" placeholder="Enter your email address" onChange={onChange} />
            </div>
        </>
    );
}

export default Email_enter;
