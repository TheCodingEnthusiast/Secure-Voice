import logo from "./assets/mic.png";
import logo2 from "./assets/wave.png";
import './HalfScreenRight.css'
function HalfScreenRight(){

    return(        
    <div className="half-screen-right">

    <div className="text-container">
      <h1>Welcome Back !</h1>
      <h2>Unlock with Your Voice, <br/>
      Secure and Seamless Login.<br/> 
      Let Your Voice Do the Talking!</h2>
      
      
      <img src={logo} alt="Description of the image" /> 
      <img src={logo2} alt="Description of the image"id="wave" /> 

      <button className="transparent-button">Sign Up</button>

  </div>
  </div>
  )
  }

  export default HalfScreenRight;