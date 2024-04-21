import React, { useState } from 'react';
import "./LoginHalfScreenLeft.css";
import Username from "./Username";
import Password from "./Password";
import AudioPopup from './AudioPopup';
import { useNavigate } from 'react-router-dom';
import RecordingPopUp from './RecordingPopUp.jsx';


function LoginHalfScreenLeft() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [audioData, setAudioData] = useState(null);
    const [isRecording, setIsRecording] = useState(false); // Add a state to manage recording

    const handleAudioRecorded = (audioURL) => {
        setAudioData(audioURL);
        console.log('Audio URL:', audioURL);
        console.log('Username:', username);
        console.log('Password:', password);
        setIsRecording(false);
        setIsPopupVisible(false);
       

    };
    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {

        setIsPopupVisible(true);
        setIsRecording(true); // Start recording when the "Sign In" button is clicked
    };

    const [isPopupVisible, setIsPopupVisible] = useState(false);


    return (
        <div className="half-screen-left">
            <h1 id="SoundSign">SoundSign In</h1>
            <h2>Sign In To your Account</h2>

            <Username onChange={handleUsernameChange} />
            <Password onChange={handlePasswordChange} />
            <button className="non-transparent-button" onClick={handleSubmit}>Sign In</button>

            {isRecording && <AudioPopup onAudioRecorded={handleAudioRecorded} />}

            {isPopupVisible && <RecordingPopUp />}

        </div>
    );
}

export default LoginHalfScreenLeft;
