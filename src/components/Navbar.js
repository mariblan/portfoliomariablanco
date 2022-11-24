import { Outlet, Link } from "react-router-dom";
import "../App.css";
import navlogo from "../resources/navbarlogo.png";

export default function Navbar() {
  return (
    <nav>
      <div class="topnav" id="myTopnav">
        <div className="dropdown">
          <button id="dropbtn">
            <img className="navlogo" src={navlogo} alt="navigation logo" />
          </button>
          <div className="dropdown-content">
            <Link className="dropdown-item" to="/">
              Home
            </Link>
            <Link className="dropdown-item" to="/aboutme">
              About me
            </Link>
            <Link className="dropdown-item" to="/CV">
              CV
            </Link>
            <Link className="dropdown-item" to="/Projects">
              Projects
            </Link>
            <Link className="dropdown-item" to="/Contact">
              Contact
            </Link>
          </div>
        </div>
        <Link className="mainnav active" to="/">
          Home
        </Link>
        <Link className="mainnav" to="/aboutme">
          About me
        </Link>
        <Link className="mainnav" to="/CV">
          CV
        </Link>
        <Link className="mainnav" to="/Projects">
          Projects
        </Link>
        <Link className="mainnav" to="/Contact">
          Contact
        </Link>
      </div>
      <Outlet />
    </nav>
  );
}
