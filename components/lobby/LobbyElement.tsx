import React from 'react';
import { NextPage } from 'next';
import { lobbyElement } from 'types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import LobbyTable from './LobbyTable';
const LobbyElement:NextPage<{element:lobbyElement}> = ({element}):JSX.Element => {
  return (
    <div className='w-[80%] mx-auto h-full bg-cover bg-center rounded-[0.5rem] font-poppins m-[2rem] flex flex-col items-center  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  '>
        <div className="w-full min-h-full bg-[#000000] rounded-[0.5rem] flex lg:flex-col ">
             <div className="w-[400px] h-[200px]  bg-cover bg-center rounded-l-[0.5rem] lg:min-h-[200px] lg:w-full lg:rounded-b-[0rem] lg:rounded-t-[0.5rem] sm:rounded-[0.5rem] "  style={{backgroundImage:`url(${element.image})`}}>
                <div className="min-h-[100%] rounded-b-[0.5rem] bg-[#00000046] transition-all opacity-0 hover:opacity-[1] flex justify-center items-center">
                    <Link href={element.link}><FontAwesomeIcon className='text-[1.5rem] cursor-pointer' icon={faArrowUpRightFromSquare}/></Link>
                </div>
             </div>
            <div className=" flex items-center  w-full   sm:hidden ">
             <LobbyTable element={element}/>
            </div>
        </div>
    </div>

  )
}

export default LobbyElement