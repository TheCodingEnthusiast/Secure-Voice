import "./Password.css"
import React, { useState } from 'react';
import Popup from './Popup';
function Password() {


    const [showPopup, setShowPopup] = useState(false);

    const handleForgotPasswordClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <h3>Password</h3>
            <div className="password-bar">
                <img src="src\assets\key.png" alt="User Icon" className="password-icon" />
                <input type="text" placeholder="Enter your password" />
            </div>
            <div className="password-forgot-line" onClick={handleForgotPasswordClick}>
                <img src="src\assets\forgot pass.png" alt="Forgot Password Icon" className="forgot-password-icon" />
                <h5>Forgot Password? Retrieve Access with Your Voice</h5>
            </div>
            {showPopup && <Popup onClose={handleClosePopup} />}
        </>
    );
}


export default Password;
