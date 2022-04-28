import React from 'react';
import { NextPage } from 'next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const LobbyNav:NextPage = ():JSX.Element => {
  return (
    <div className='w-full flex min-h-[10vh] items-center justify-between bg-[#000000] '>
        <h1 className='px-[4rem] font-bold  text-[1.5rem]'>Librarium</h1>
    </div>
  )
}

export default LobbyNav