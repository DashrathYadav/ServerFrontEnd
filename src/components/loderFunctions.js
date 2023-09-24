import { backendurl } from "../backendUrl";


// fetch server by Id
// return server object
export const  fetchServerInfo= async ({params})=>{

    console.log("serverId",params.serverId);

    const url=backendurl+"/"+params.serverId;
    console.log("url hit is",url);
    let result= await fetch(url);
    result=await result.json();
    console.log("result fetched",result);
    
    return result;
}

// fectch All server.
// returns list of servers.
export const  fetchServerAllInfo= async ()=>{


    const url=backendurl;
    console.log("url hit is",url);
    let result= await fetch(url);
    result=await result.json();
    console.log("result fetched",result);
    
    return result;
}

// fecch server by name.
// return list of servers.
export const  fetchServerInfoByName= async ({params})=>{

    console.log("serverId",params.serverId);

    const url=backendurl+"/name/"+params.serverName;
    console.log("url hit is",url);
    let result= await fetch(url);
    result=await result.json();
    console.log("result fetched",result);
    
    return result;
}