import { useState } from "react";
import "./FetchByName.css";

import { Outlet, useNavigate } from "react-router-dom";

// component that takes name of server to be search 
// request for the list of server with user provided name
function FetchByName() {
  const [serverName, setServerName] = useState("");
  const [errors,setErrors]=useState("");
  const navigate = useNavigate();

  function handleSubmitName() {
    if(serverName)
    navigate(`${serverName}`);
    else
    setErrors("Missing Server Name")
  }

  return (
    <div className="FetchByName--container">
      <div>
        <label><strong>Server Name: </strong></label>
        <input
        className="FetchByName--input"
          type="text"
          onChange={(event) => {
            setServerName(event.target.value);
          }}
          value={serverName}
        ></input>
        <p className="error">{errors}</p>
        <button className="FetchByName--button" onClick={handleSubmitName}>Search</button>
      </div>
      <div className="FetchByName--outlet" >
      <Outlet/>
      </div>
    </div>
  );
}

export default FetchByName;
