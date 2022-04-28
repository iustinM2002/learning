import React from 'react';
import { NextPage } from 'next';
import SignUpBody from '@/components/sign/SignUpBody';
import { PrismaClient } from '@prisma/client';
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
const SignUp:NextPage<{contacts:dataContact}> = ({contacts}):JSX.Element => {
  return (
    <div className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'><SignUpBody contacts={contacts}/></div>
  )
}

export default SignUp