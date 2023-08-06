import './navbar.css'
const NavBar = () => {
    return ( 
        <div className="nav-bar">
            <img src={""} alt="" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">How it Works</a></li>
                <li><a href="#">Feedbacks</a></li>
            </ul>
            <button className='btn'>
                <a href="#">Log in</a>
            </button>
        </div>
     );
}
 
export default NavBar;