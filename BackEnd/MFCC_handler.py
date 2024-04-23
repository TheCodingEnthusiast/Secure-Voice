import os
import subprocess
import librosa
import numpy as np

# Function to convert WebM to WAV using FFmpeg
def convert_webm_to_wav(webm_file, wav_file):
    command = f'ffmpeg -y -i "{webm_file}" "{wav_file}"'
    subprocess.run(command, shell=True, check=True)

# Function to extract MFCC features
def extract_mfcc(webm_file_path, wav_file_path,sample_rate=16000, n_mfcc=13):


    convert_webm_to_wav(webm_file_path, wav_file_path)
    # Load the audio file
    audio_data, sr = librosa.load(wav_file_path, sr=sample_rate)
    # Extract MFCC features
    mfccs = librosa.feature.mfcc(y=audio_data, sr=sr, n_mfcc=n_mfcc)
    # Take the mean of MFCC coefficients along the time axis
    feature_vector = np.mean(mfccs, axis=1)
    return feature_vector
