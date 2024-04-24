from fastapi import FastAPI, Form, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
from CRUD import CRUD_find_user_by_username,CRUD_login,CRUD_register
import model


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Adjust this to match your frontend's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/login")
async def login(username: str = Form(...), password: str = Form(...), audio: UploadFile = File(...)):
    try:
        # Define the directory where you want to save the audio files
        # Make sure this directory exists or create it if it doesn't
        message=CRUD_login(username,password)
        

        if message=="Logged in successfully":
            audio_directory = f"audio_files"
            if not os.path.exists(audio_directory):
                os.makedirs(audio_directory)

            # Define the path where the audio file will be saved
            audio_file_path = os.path.join(audio_directory, f"{username}_{audio.filename}")

            # Save the uploaded audio file to the specified path
            with open(audio_file_path, "wb") as buffer:
                while True:
                    chunk = await audio.read(8192) # Read the file in chunks of 8KB
                    if not chunk:
                        break
                    buffer.write(chunk)


            message=model.validate_user(username,audio_file_path)


 
        return {"message": f"{message}"}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=400, detail=str(e))


@app.post("/register")
async def register(username: str = Form(...), password: str = Form(...), email: str=Form(...), audio: UploadFile = File(...)):

    try:
        # Define the directory where you want to save the audio files
        # Make sure this directory exists or create it if it doesn't

        message=CRUD_register(username,password,email)

        if message=="Registration succesfull !":

            audio_directory = "audio_files"
            if not os.path.exists(audio_directory):
                os.makedirs(audio_directory)

            # Define the path where the audio file will be saved
            audio_file_path = os.path.join(audio_directory, f"{username}_{audio.filename}")

            # Save the uploaded audio file to the specified path
            with open(audio_file_path, "wb") as buffer:
                while True:
                    chunk = await audio.read(8192) # Read the file in chunks of 8KB
                    if not chunk:
                        break
                    buffer.write(chunk)

            model.add_user(username,audio_file_path)
        
   
        return {"message": f"{message}"}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=400, detail=str(e))
    


@app.post("/forgot-password")
async def forgot_password(email: str = Form(...)):
    try:
        # Define the path where the forget password requests will be saved
        forget_password_file_path = "Forget_req.txt"

        # Check if the file exists, if not, create it
        if not os.path.exists(forget_password_file_path):
            with open(forget_password_file_path, "w") as file:
                file.write(email + "\n")
        else:
            # If the file exists, append the new email to the file
            with open(forget_password_file_path, "a") as file:
                file.write(email + "\n")

        return {"message": "Forgot password request received successfully."}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=400, detail=str(e))