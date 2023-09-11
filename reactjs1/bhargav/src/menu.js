import {Link} from "react-router-dom";
function Menu(){
    return(
        <div>
        <Link to="/home">Home</Link> |
        <Link to="/about">about</Link> |
        <Link to="/person">person</Link> |
        <Link to="/services">Services</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/trainees">trainees</Link> |
        <Link to="/student">Student</Link> |
        <Link to="/events">Events</Link>|   
        <Link to="/events1">Events1</Link> |
        <Link to="/BackgroundColorChanger">background</Link>|
        <Link to="/BackgroundImageSliders">background-Img</Link>|
        <Link to="/IncrementAndDecrement">Ince-Dec</Link>|
        <Link to="/Hooks">Hooks</Link>|
        <Link to="/Form">Form</Link>|
        <Link to="/Form1">Form1</Link>|
        
        </div>
    )
}
export default Menu;