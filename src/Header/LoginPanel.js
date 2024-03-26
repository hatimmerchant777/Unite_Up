import { Link } from "react-router-dom";
import "./LoginPanel.css"
function LoginPanel(){
    return(
        <>
        <div class="row">
            <div class="col pageHeading">
                <div className="empty"></div>
                <i class="fa-solid fa-person"></i>
                <p class="connect1" >Connected to number of 9000+ NGO's*</p>
                <i class="fa-solid fa-right-to-bracket"></i>
                <p class="login1">Login</p>
                <i class="fa-solid fa-users-line"></i>
                <Link to="/rform" class="register1">Register Form</Link>
            </div>
        </div>
        </>
    )
}

export default LoginPanel;