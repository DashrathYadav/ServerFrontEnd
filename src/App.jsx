import {
  Route,
  RouterProvider,
  // createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import FetchOptions from "./components/fetchserver/FetchOptions";
import ServerInfoCards from "./components/ServerInfoCards";
import FetchById from "./components/fetchserver/byid/FetchById";
import { fetchServerAllInfo, fetchServerInfo, fetchServerInfoByName } from "./components/loderFunctions";
import FetchByName from "./components/fetchserver/byName/FetchByName";
import AddServer from "./components/addServer/AddServer";
import UpdatedServer from "./components/updateServer/UpdateServer";
import DeleteById from "./components/deleteServer/DeleteById";
/*
      (Root) /
            |---> /fetch server-|
            |                   |---> /Fetch All Servers
            |                   |---> /Fetch By Id
            |                   |---> /Fetch by Name
            |---> /Add Server
            |
            |---> /Update-Server
            | 
            |---> /Delete-Server

*/

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route    path="/" element={<HomePage/>}>
      <Route path="/" element={<HomePage/>}></Route>
        <Route path="fetchServers" element={<FetchOptions />}>
          <Route path="fetchAllServers" element={<ServerInfoCards/>}
          loader={fetchServerAllInfo}
          />
          <Route path="fetchById" element={<FetchById/>}>
            <Route
              path=":serverId"
              element={<ServerInfoCards/>}
              loader={fetchServerInfo}
            ></Route>            
          </Route>

          <Route path="fetchByName" element={<FetchByName/>}>
            <Route
              path=":serverName"
              element={<ServerInfoCards/>}
              loader={fetchServerInfoByName}
            ></Route>            
          </Route>
          
        </Route>
        <Route path="addServer" element={<AddServer/>}/>
        <Route path="updateServer" element={<UpdatedServer/>}/>
        <Route path="deleteServer" element={<DeleteById/>}/>
    </Route>,
  )
);

function App() {
  return <RouterProvider router={router}  />;
}

export default App;
