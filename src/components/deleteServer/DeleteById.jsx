import { useState } from "react";
import "./DeleteById.css";

import { useNavigate } from "react-router-dom";
import { backendurl } from "../../backendUrl";

function DeleteById() {
  const [serverId, setServerId] = useState("");
  const [errors,setErrors]=useState("");
  const navigate = useNavigate();

   async function handleSubmitId() {

    if(serverId)
    {
        let result=await fetch(backendurl+`/${serverId}`,{
            method:"DELETE"
        });
        
        console.log(result);
        navigate(`/fetchServers/fetchAllServers`);
    }
    else{
      setErrors("Server Id is missing");
    }

  }

  return (
    <div className="DeleteById--container">
      <div>
        <label><strong>Server Id: </strong></label>
        <input
        className="DeleteById--input"
          type="number"
          onChange={(event) => {
            setServerId(event.target.value);
          }}
          value={serverId}
        ></input>
        <p className="error">{errors}</p>
        <button className="DeleteById--button" onClick={handleSubmitId}>Delete </button>
      </div>
      <div className="DeleteById--outlet" >
      </div>
    </div>
  );
}

export default DeleteById;
