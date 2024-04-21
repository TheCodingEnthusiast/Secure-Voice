import React from 'react';
import './Username.css'; 

function Username({ onChange }) {
    return (
        <>
            <h3>Username</h3>
            <div className="username-bar">
                <img src="src\assets\UserImage.png" alt="User Icon" className="user-icon" />
                <input type="text" placeholder="Your digital Identity" onChange={onChange} />
            </div>
        </>
    );
}

export default Username;
