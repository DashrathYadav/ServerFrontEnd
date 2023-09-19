import { useState } from "react";
import "./FetchById.css";

import { Outlet, useNavigate } from "react-router-dom";

function FetchById() {
  const [serverId, setServerId] = useState("");
  const navigate = useNavigate();
  const [errors,setErrors]=useState("");

  function handleSubmitId() {
    if(serverId)
    navigate(`${serverId}`);
  else
    setErrors("Server Id is missing")
}

  return (
    <div className="FetchById--container">
      <div>
        <label><strong>Server Id: </strong></label>
        <input
        className="FetchById--input"
          type="number"
          onChange={(event) => {
            setServerId(event.target.value);
          }}
          value={serverId}
        ></input>
        <p className="error">{errors}</p>
        <button className="FetchById--button" onClick={handleSubmitId}>Search</button>
      </div>
      <div className="FetchById--outlet" >
      <Outlet/>
      </div>
    </div>
  );
}

export default FetchById;
