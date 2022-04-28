import { lobbyElements } from "data";
import type { NextApiRequest,NextApiResponse } from "next";
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method !== 'GET'){
        return res.status(405).json({Message:'Method not allowed.'})
    }

    res.status(200).json(lobbyElements);
}