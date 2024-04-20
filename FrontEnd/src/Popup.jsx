import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Popup = ({ onClose }) => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic here
        console.log('Email submitted:', email);
        // Redirect logic goes here
        navigate('/wait-page');
        onClose(); // Close the popup
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <h3>Forgot Password</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;
