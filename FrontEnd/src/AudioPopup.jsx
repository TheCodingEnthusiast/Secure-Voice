import React, { useEffect, useRef } from 'react';

function AudioPopup({ onAudioRecorded }) {
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);

    useEffect(() => {
        const startRecording = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.addEventListener('dataavailable', e => {
                audioChunks.current.push(e.data);
            });
            mediaRecorderRef.current.addEventListener('stop', () => {
                const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
                const audioURL = URL.createObjectURL(audioBlob);
                onAudioRecorded(audioURL); // Call the callback with the audio URL
            });
            mediaRecorderRef.current.start();

            // Stop recording after 5 seconds
            setTimeout(() => {
                if (mediaRecorderRef.current) {
                    mediaRecorderRef.current.stop();
                }
            }, 5000); // 5000 milliseconds = 5 seconds
        };

        startRecording();
    }, [onAudioRecorded]);

    return null; 
}

export default AudioPopup;
