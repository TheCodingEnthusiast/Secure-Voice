import React, { useEffect, useRef, useState } from 'react';
import './AudioPopup.css'

function AudioPopup({ onAudioRecorded }) {
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);
    const [isRecording, setIsRecording] = useState(false); // State to track recording status

    useEffect(() => {
        if (isRecording) {
            const startRecording = async () => {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorderRef.current = new MediaRecorder(stream);
                mediaRecorderRef.current.addEventListener('dataavailable', e => {
                    audioChunks.current.push(e.data);
                });
                mediaRecorderRef.current.addEventListener('stop', () => {
                    const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
                    const audioURL = URL.createObjectURL(audioBlob);
                    onAudioRecorded(audioURL); // Call the callback with the audio URL
                });
                mediaRecorderRef.current.start();
            };

            startRecording();
        }
    }, [isRecording, onAudioRecorded]);

    const handleMouseDown = () => {
        setIsRecording(true);
    };

    const handleMouseUp = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        setIsRecording(false);
    };

    return (
        <div className="recording-popup">
            <div className="recording-popuup-content">
                <h4>Recording Audio !</h4>
                <img src="./src/assets/recorder (2).png" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
            </div>
        </div>
    );
}

export default AudioPopup;
