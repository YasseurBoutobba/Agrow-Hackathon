import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={""} alt="" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">How it Works</a>
        </li>
        <li>
          <a href="#">Feedbacks</a>
        </li>
      </ul>
      <Link to={"/sign"}>
        <button className="btn">
          <a href="#">Get Started</a>
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
