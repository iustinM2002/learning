import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function register(req:NextApiRequest,res:NextApiResponse){
    if(req.method !== 'POST'){
        res.status(405).json({message:"Only POST method allowed"});
    }
    const registerData = JSON.parse(req.body);
    const registerContact = await prisma.contatcs.create({
        data:registerData
    });
    res.json(registerContact)
}
