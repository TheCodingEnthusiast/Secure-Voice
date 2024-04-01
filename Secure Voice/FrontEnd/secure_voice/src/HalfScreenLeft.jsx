import "./HalfScreenLeft.css";
import Username from "./Username";
import Password from "./Password";
function HalfScreenLeft() {

    return(
    <div className="half-screen-left">
        <h1 id="SoundSign">SoundSign In</h1>
        <h2>Sign In To your Account</h2>

        <Username/>
        <Password/>
       

    </div>
    )
}

export default HalfScreenLeft;

