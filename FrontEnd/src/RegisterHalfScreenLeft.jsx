import React from 'react';
import logo from "./assets/micplus.png";
import logo2 from "./assets/settings.png";
import './RegisterHalfScreenLeft.css'
import { useNavigate } from 'react-router-dom';
function RegisterHalfScreenLeft() {

 
        const navigate = useNavigate();
    
        const handleSignUpClick = () => {
            navigate('/'); // Replace '/sign-up' with your desired path
        };


 return (
    <>
    
    <div className="half-screen-right">
        <div className="text-container">
        <h1>Hello Friends !</h1>
            <h2>New Account,New Voice! <br/>
                Register With Your Unique Voice<br/> 
                Print</h2>
                <img src={logo} alt="Description of the image" id="img1"/> 
                <img src={logo2} alt="Description of the image" id="img2"/> 

                <button className="transparent-button" onClick={handleSignUpClick} >Sign In</button>

            
        </div>


    </div>

    </>
 );
}

export default RegisterHalfScreenLeft;




