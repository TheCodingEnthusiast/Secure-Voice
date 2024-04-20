import "./Password.css"

function Password() {
    return (
        <>
            <h3>Password</h3>
            <div className="password-bar">
                <img src="src\assets\key.png" alt="User Icon" className="password-icon" />
                <input type="text" placeholder="Enter your password" />
            </div>
            <div className="password-forgot-line">
                <img src="src\assets\forgot pass.png" alt="Forgot Password Icon" className="forgot-password-icon" />
                <h5>Forgot Password? Retrieve Access with Your Voice</h5>
            </div>
        </>
    );
}

export default Password;
