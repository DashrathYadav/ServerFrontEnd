import { Link, Outlet } from "react-router-dom";
import "./FetchOptions.css";
function FetchOptions() {
  return (
    <div className="FetchOptions--container">
      <div className="FetchOptions--buttonsHolder">
        <Link to={"fetchAllServers"}>
          <button className="FetchOptions--button">Fetch Servers</button>
        </Link>
        <Link to={"fetchById"}>
          <button className="FetchOptions--button" >Fetch Servers By Id</button>
        </Link>
        <Link to={"fetchByName"}>
          <button  className="FetchOptions--button" >Fetch Servers By Name</button>
        </Link>
      </div>
      <div  className="FetchOptions--outlet">
      <Outlet/>
      </div>
    </div>
  );
}

export default FetchOptions;
