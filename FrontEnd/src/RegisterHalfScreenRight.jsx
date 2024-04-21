import React, { useState } from 'react';
import './RegisterHalfScreenRight.css'
import Username from "./Username";
import PasswordSet from "./PasswordSet";
import Email_enter from './Email_enter';
import AudioPopup from './AudioPopup';
import { useNavigate } from 'react-router-dom';
import RecordingPopUp from './RecordingPopUp.jsx';

function RegisterHalfScreenLeft() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [audioData, setAudioData] = useState(null);
    const [isRecording, setIsRecording] = useState(false); // Add a state to manage recording
    const[email,setEmail]=useState('');

    const handleAudioRecorded = (audioURL) => {
        setAudioData(audioURL);
        console.log('Audio URL:', audioURL);
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Email: ',email)
        setIsRecording(false);
        setIsPopupVisible(false);
       

    };

    const handleEmailChange =(e)=>{

        setEmail(e.target.value);
    };
    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    

    const handleSubmit = () => {

        if (!username || !password || !email) {
            alert('Please fill in all fields.');
            return;
        }
    
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        setIsPopupVisible(true);
        setIsRecording(true); // Start recording when the "Sign In" button is clicked
    };

    const [isPopupVisible, setIsPopupVisible] = useState(false);

 return (
    <>
    
    <div className="half-screen-left">
        <h1 id="SoundSign">SoundSign Up</h1>
        <h2 id="register">Register With Your Voice</h2>
        <Username onChange={handleUsernameChange} />
        <PasswordSet onChange={handlePasswordChange} />
        <Email_enter onChange={handleEmailChange}/>
        <button className="non-transparent-button-register" onClick={handleSubmit}>Sign Up</button>
        {isRecording && <AudioPopup onAudioRecorded={handleAudioRecorded} />}

        {isPopupVisible && <RecordingPopUp />}
    
    </div>
    
    
    
    </>
 );
}

export default RegisterHalfScreenLeft;




