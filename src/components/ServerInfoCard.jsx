/* eslint-disable react/prop-types */

import "./ServerInfoCard.css"
function ServerInfoCard(props) {
    console.log("prop data",props);
    const serverData=props.data;
    console.log("serverData",serverData);
  return (
    <div className="ServerInfoCard--container">
        <div className="ServerInfoCard--infoHolder">
          <table cellSpacing={25}>
        <tr><td> <h3>server Id:</h3></td><td><h3> <b>{serverData.id}</b></h3></td></tr>
        <tr><td>Server : </td><td><b>{serverData.name} </b></td></tr>
        <tr> <td>language:  </td><td> <b>{ serverData.language}</b></td></tr>
         <tr><td>framework: </td><td><b>{ serverData.framework}</b></td></tr>
         </table>
        </div>
    </div>
  )
}

export default ServerInfoCard