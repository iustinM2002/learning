import { NextApiRequest, NextApiResponse } from "next";
import { lobbyElements } from "data";

export default async  function PostProject(req:NextApiRequest,res:NextApiResponse){
    if(req.method !== 'POST')
    return res.status(405).json({message:"Method not allowed"});
    const registerProject = JSON.parse(req.body);
     lobbyElements.push(registerProject);
    
    
    res.status(201).json(lobbyElements);
}