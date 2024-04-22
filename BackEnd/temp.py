import requests

def upload_file_and_get_mfcc(file_path, ngrok_url):
    # The endpoint URL of your Flask application
    url = f"{ngrok_url}/mfcc"
    
    # Open the file in binary mode
    with open(file_path, "rb") as file:
        # Make a POST request to the Flask application
        response = requests.post(url, files={"file": file})
        
        # Check if the request was successful
        if response.status_code == 200:
            # Parse the JSON response
            data = response.json()
            print("MFCC Features:", data)
        else:
            print("Failed to upload file or get MFCC features.")
            print("Response status code:", response.status_code)
            print("Response text:", response.text)


# Example usage
ngrok_url = "https://5077-34-85-251-197.ngrok-free.app" # Replace with your actual ngrok URL
file_path = "audio_files/admin_audio.webm"
upload_file_and_get_mfcc(file_path, ngrok_url)
