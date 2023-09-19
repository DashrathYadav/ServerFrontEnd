import { useLoaderData } from "react-router-dom";
import "./ServerInfoCards.css";
import ServerInfoCard from "./ServerInfoCard";
function ServerInfoCards() {
  const serverData = useLoaderData();
  console.log("serverData", serverData);

  if(Array.isArray(serverData))
  console.log("dataa type is array");

  if(Array.isArray(serverData))
  return (
    <div className="ServerInfoCards--container">
      {serverData.map((data, index) => {
        console.log(data);
        return <ServerInfoCard data={data} key={index} />;
      })}
    </div>
  );
  else{
    return   <ServerInfoCard data={serverData} />;
  }
}

export default ServerInfoCards;
