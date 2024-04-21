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




    const handleAudioRecorded = async (audioURL) => {
        // Prepare FormData with the username and password
        setIsRecording(false);
        setIsPopupVisible(false);
        console.log("Finished");
    


        submitFormData(username, password, audioURL);
      
    };
    
    
    const submitFormData = async (username, password, audioURL) => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
    
        // Fetch the audio file as a blob
        try {
            const response = await fetch(audioURL);
            const audioBlob = await response.blob();
    
            // Append the audio blob to the FormData
            formData.append('audio', audioBlob, 'audio.mp3'); // 'audio' is the field name expected by your backend
        } catch (error) {
            console.error('Error fetching audio file:', error);
            return;
        }
    
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    
        console.log("Finished making formdata above");
        try {
            const response = await fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);
            // Handle the response here, e.g., navigate to another page
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    

    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        if (!username || !password) {
            alert('Please fill in all fields.');
            return;
        }
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
