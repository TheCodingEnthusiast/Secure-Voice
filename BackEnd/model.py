import pickle
import numpy as np
import librosa

def model(username,audio_file_path,num):
    # Specify the path to your .pkl file
    file_path = 'centroids.pkl'

    audio_arr=extract_mfcc(audio_file_path)
    # Open the file in binary mode and load the object
    with open(file_path, 'rb') as file:
        loaded_object = pickle.load(file)
    print(loaded_object)
    user_array=loaded_object[username]

    valid=recognize_speaker(audio_arr,user_array,60)
    print(valid)

def recognize_speaker(new_feature_vector, registered_feature_vectors,threshold):
    distances = np.linalg.norm(registered_feature_vectors - new_feature_vector, axis=1)
    min_distance = np.min(distances)
    if min_distance <= threshold:

        return True
    else:
        return False
    
def extract_mfcc(audio_file, sample_rate=16000, n_mfcc=13):
    # Load the audio file
    audio_data, sr = librosa.load(audio_file, sr=sample_rate)
    # Extract MFCC features
    mfccs = librosa.feature.mfcc(y=audio_data, sr=sr, n_mfcc=n_mfcc)
    # Take the mean of MFCC coefficients along the time axis
    feature_vector = np.mean(mfccs, axis=1)

    return feature_vector

