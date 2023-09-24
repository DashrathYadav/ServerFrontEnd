import { useState } from "react";
import "./AddServer.css";
import { backendurl } from "../../backendUrl";
import { useNavigate } from "react-router-dom";
function AddServer() {
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

  // function to request for add server
  const handleAddServer = async () => {
    if (
      formData.id &&
      formData.name &&
      formData.language &&
      formData.framework
    ) {
       let result = await fetch(backendurl, {
        method: "POST",
        mode: "cors",
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
      setErrors("Field Value Missing");
    }
  };

  return (
    <div className="AddServer--container">
      <h3>Server Details</h3>
      <div className="AddServer--AllInputs">
        <table cellSpacing={20} cellPadding={10}>
          <tr>
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
        <button onClick={handleAddServer}> Add Server</button>
      </div>
    </div>
  );
}

export default AddServer;
