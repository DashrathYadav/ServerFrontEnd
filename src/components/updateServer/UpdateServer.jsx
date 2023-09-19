import { useState } from "react";
import "./UpdateServer.css";
import { backendurl } from "../../backendUrl";
import { useNavigate } from "react-router-dom";
function UpdatedServer() {
    const navigate=useNavigate();
    const [errors,setErrors]=useState("");

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    language: "",
    framework: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleupdateServer = async () => {
    if (
      formData.id 
    ) {
       let result = await fetch(backendurl+`/${formData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

        result= await result.json();
        
        console.log(result);
        navigate("/fetchServers/fetchAllServers");
    }
    else{
      setErrors("Id value missing");
    }
  };

  return (
    <div className="updateServer--container">
      <h3>Update Details</h3>
      <div className="updateServer--AllInputs">
        <table cellSpacing={20} cellPadding={10}>
          <tr>
            <p>Serve id  which need to be updated</p>
            <label>Server Id :</label>
            <td></td>{" "}
            <td>
              <input
              name="id"
                type="number"
                onChange={handleInputChange}
                value={formData.id}
              />
            </td>
          </tr>
          <tr>
            <label>Server Name</label>
            <td></td>{" "}
            <td>
              <input
              name="name"
                type="text"
                onChange={handleInputChange}
                value={formData.name}
              />
            </td>
          </tr>
          <tr>
            <label> Language</label>
            <td></td>{" "}
            <td>
              <input
              name="language"
                type="text"
                onChange={handleInputChange}
                value={formData.language}
              />
            </td>
          </tr>
          <tr>
            <label>Framework</label>
            <td></td>{" "}
            <td>
              <input
              name="framework"
                type="text"
                onChange={handleInputChange}
                value={formData.framework}
              />
            </td>
          </tr>
        </table>
        <p className="error">{errors}</p>
        <button onClick={handleupdateServer}> Update Server</button>
      </div>
    </div>
  );
}

export default UpdatedServer;
