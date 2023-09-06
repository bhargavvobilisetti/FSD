import {Link} from "react-router-dom";
function Menu(){
    return(
        <div>
        <Link to="/home">Home</Link> |&nbsp;&nbsp;
        <Link to="/about">about</Link> |&nbsp;&nbsp;
        <Link to="/person">person</Link> |&nbsp;&nbsp;
        <Link to="/services">Services</Link> |&nbsp;&nbsp;
        <Link to="/contact">Contact</Link> |&nbsp;&nbsp;
        <Link to="/trainees">trainees</Link> |&nbsp;&nbsp;
        <Link to="/student">Student</Link> |&nbsp;&nbsp;
        <Link to="/events">Events</Link>| &nbsp;&nbsp;  
        <Link to="/events1">Events1</Link> |&nbsp;&nbsp;
        <Link to="/background">background</Link>&nbsp;&nbsp;
        </div>
    )
}
export default Menu;