import { backendurl } from "../backendUrl";

export const  fetchServerInfo= async ({params})=>{

    console.log("serverId",params.serverId);

    const url=backendurl+"/"+params.serverId;
    console.log("url hit is",url);
    let result= await fetch(url);
    result=await result.json();
    console.log("result fetched",result);
    
    return result;
}
export const  fetchServerAllInfo= async ()=>{


    const url=backendurl;
    console.log("url hit is",url);
    let result= await fetch(url);
    result=await result.json();
    console.log("result fetched",result);
    
    return result;
}
export const  fetchServerInfoByName= async ({params})=>{

    console.log("serverId",params.serverId);

    const url=backendurl+"/name/"+params.serverName;
    console.log("url hit is",url);
    let result= await fetch(url);
    result=await result.json();
    console.log("result fetched",result);
    
    return result;
}