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
        setIsRecording(false);
        setIsPopupVisible(false);
        submitFormData(username, password,email, audioURL);
       

    };

    const submitFormData = async (username, password,email, audioURL) => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('email', email);
    
        // Fetch the audio file as a blob
        try {
            const response = await fetch(audioURL);
            const audioBlob = await response.blob();
    
            // Append the audio blob to the FormData
            formData.append('audio', audioBlob, 'audio.webm'); // 'audio' is the field name expected by your backend
        } catch (error) {
            console.error('Error fetching audio file:', error);
            return;
        }
    
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    
        console.log("Finished making formdata above");
        try {
            const response = await fetch('http://127.0.0.1:8000/register', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            alert(data['message']);
            // Handle the response here, e.g., navigate to another page
        } catch (error) {
            console.error('Error:', error);
        }
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
        setIsRecording(true); 
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




