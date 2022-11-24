import { Outlet, Link } from "react-router-dom";
import "../home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="name">
        <h1 className="maria">Maria</h1>
        <h1 className="blanco">Blanco</h1>
        <h1 className="canal">Canal</h1>
      </div>

      <div className="main">
        <h2>JUNIOR WEB DEVELOPER</h2>
        <nav className="navbar">
          <button id="about">
            <Link to="/aboutme">About me</Link>
          </button>
          <button>
            <Link to="/CV">CV</Link>
          </button>
          <button>
            <Link to="/Projects">Projects</Link>
          </button>
          <button>
            <Link to="/Contact">Contact</Link>
          </button>
        </nav>

        <Outlet />
      </div>
    </div>
  );
}
