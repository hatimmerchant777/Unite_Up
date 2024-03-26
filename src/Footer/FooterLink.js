import { Link } from "react-router-dom";
import "./FooterLink.css"

function FooterLink(){
    return(
        <>
            <div class="row footer-1">
                <div class="col">
                    <a href="#" className="line">Website Policy</a>
                    <a href="#" className="line">Site Map</a>
                    <Link to="/feedback" className="line">Feedback</Link>
                    <a href="#" className="line">Contact-Us</a>
                    <a href="#">Help</a>
                </div>
            </div>        
        </>
    )
}

export default FooterLink;