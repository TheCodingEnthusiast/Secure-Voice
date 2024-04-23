import json
import bcrypt
import base64


def CRUD_find_user_by_username(username):
    # Open the users.json file
    with open('users.json', 'r') as file:
        # Load the JSON data from the file
        users = json.load(file)
    
    # Search for the user with the given username
    for user in users:
        if user['username'] == username:
            return [user['username'],user['password'],user['email']]
    
    # Return None if the user is not found
    return None

def CRUD_login(username,password):

    answer=CRUD_find_user_by_username(username)
    if answer==None:
        return "No Such User Found"

    else:

        if bcrypt.checkpw( password.encode('utf-8'),base64.b64decode(answer[1])):

            

            return "Logged in successfully"
        else:
            return "Incorrect Password"

def CRUD_find_user_by_email(email):
    # Open the users.json file
    with open('users.json', 'r') as file:
        # Load the JSON data from the file
        users = json.load(file)
    
    # Search for the user with the given username
    for user in users:
        if user['email'] == email:
            return [user['username'],user['password'],user['email']]
    
    # Return None if the user is not found
    return None



def CRUD_register(username,password,email):

    answer=CRUD_find_user_by_username(username)
    answer2=CRUD_find_user_by_email(email)
    if answer==None and answer2==None:
        with open('users.json', 'r') as file:
            # Load the JSON data from the file
            users = json.load(file)

        password = f"{password}".encode('utf-8') # Convert the password to bytes
        password = bcrypt.hashpw(password, bcrypt.gensalt())
        password=base64.b64encode(password).decode('utf-8')

        users.append({"username":username,"email":email,"password":password})

        with open('users.json', 'w') as file:
            # Write the updated list back to the file
            json.dump(users, file, indent=4)

        return "Registration succesfull !"
    
    elif answer2!=None:
        return "Registration Failed! Email already in use !"



    return "Registration Failed! Username already exists !"
        


        




