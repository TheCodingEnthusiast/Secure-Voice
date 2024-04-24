import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Popup = ({ onClose }) => {
    const [emailForgot, setEmail] = useState('');
 

    const handleSubmit = async (e) => {

        if (emailForgot){
            const formData = new FormData();
            formData.append('email', emailForgot);
        
        
            console.log("Finished making formdata above");
            try {
                const response = await fetch('http://127.0.0.1:8000/forgot-password', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                alert(data['message']);
                // Handle the response here, e.g., navigate to another page
            } catch (error) {
                console.error('Error:', error);
            }
        }
        else{

            alert("Please enter email");

        }
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <button className="close-button" onClick={() => onClose(false)}>X</button> 
                <h3>Forgot Password</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={emailForgot}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button  onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;
