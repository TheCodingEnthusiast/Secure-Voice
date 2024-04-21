from fastapi import FastAPI, Form, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os

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
        audio_directory = "audio_files"
        if not os.path.exists(audio_directory):
            os.makedirs(audio_directory)

        # Define the path where the audio file will be saved
        audio_file_path = os.path.join(audio_directory, audio.filename)

        # Save the uploaded audio file to the specified path
        with open(audio_file_path, "wb") as buffer:
            while True:
                chunk = await audio.read(8192) # Read the file in chunks of 8KB
                if not chunk:
                    break
                buffer.write(chunk)

        print(f"Audio file saved at {audio_file_path}")
        return {"message": "Login successful", "audio_file_path": audio_file_path}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=400, detail=str(e))
