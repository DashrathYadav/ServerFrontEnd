import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar--container">
      <nav className="NavBar--nav">
        <Link to={"fetchServers"}>
          <button className="NavBar--button">Fetch servers</button>
        </Link>
        <Link to={"addServer"}>
          <button className="NavBar--button">Add server</button>
        </Link>
        <Link to={"updateServer"}>
          <button className="NavBar--button">Update server</button>
        </Link>
        <Link to={"deleteServer"}>
          <button className="NavBar--button">Remove server</button>
        </Link>
      </nav>
      <div></div>
    </div>
  );
}

export default NavBar;
