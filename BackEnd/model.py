from MFCC_handler import extract_mfcc
import numpy as np
import pickle


def recognize_speaker(given_mfcc, user_mfcc,threshold):

    distance = np.linalg.norm(user_mfcc - given_mfcc)
    print(distance)
    if distance<=threshold:

        return True
    else:
        return False


def update_centroids(given_mfcc,user_mfcc,num):

    return (user_mfcc*num+given_mfcc)/(num+1)


def validate_user(username,audio_path):

    


    given_mfcc=extract_mfcc(audio_path,audio_path.replace(".webm",".wav"))

    with open("centroids.pkl", 'rb') as file:
        users = pickle.load(file)

    user_mfcc,num=users[username]


    if recognize_speaker(given_mfcc, user_mfcc,40):

        # users[username]=[update_centroids(given_mfcc,user_mfcc,num),num+1]

        
       
        with open("centroids.pkl", 'wb') as file:
            pickle.dump(users, file)


        return "Logged in Succesfully ! Voice Pattern Matched !!"

    else :
        return "Biometric verification failed !"


def add_user(username,audio_path):


    given_mfcc=extract_mfcc(audio_path,audio_path.replace(".webm",".wav"))

    with open("centroids.pkl", 'rb') as file:
        users = pickle.load(file)

    users[username]=[given_mfcc,1]


    with open("centroids.pkl", 'wb') as file:
        pickle.dump(users, file)


    return "New User registered !"



def show_centroid():

    with open("centroids.pkl", 'rb') as file:
        users = pickle.load(file)


    print(users)





# show_centroid()