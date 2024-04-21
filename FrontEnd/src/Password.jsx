import "./Password.css"
import React, { useState } from 'react';
import Popup from './Popup';
function Password({ onChange }) {


    const [showPopup, setShowPopup] = useState(false);

    const handleClosePopup = (shouldRedirect) => {
        setShowPopup(false);
        if (shouldRedirect) {
  
            navigate('/wait-page'); 
        }
    };

    const handleForgotPasswordClick = () => {
        setShowPopup(true);
    };


    return (
        <>
            <h3>Password</h3>
            <div className="password-bar">
                <img src="src\assets\key.png" alt="User Icon" className="password-icon" />
                <input type="password" placeholder="Enter your password" onChange={onChange}/>
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
