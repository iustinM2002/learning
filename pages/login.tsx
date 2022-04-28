import React from 'react';
import { NextPage } from 'next';
import { PrismaClient } from '@prisma/client';
// import components
import LoginBody from '../components/login/LoginBody';
import { dataContact } from 'types';

const prisma = new PrismaClient();
export async function getServerSideProps(){
    const contacts = await prisma.contatcs.findMany();
    return{
        props:{
            contacts:contacts
        }
    }
}


const Login:NextPage<{contacts:dataContact}> = ({contacts}):JSX.Element => {
  return (
    <div className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'>
        <LoginBody contacts={contacts}/>
    </div>
  )
}

export default Login