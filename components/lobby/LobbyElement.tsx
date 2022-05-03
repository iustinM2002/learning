import React, { SetStateAction, useState } from 'react';
import { NextPage } from 'next';
import { lobbyElement } from 'types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare,faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const LobbyElement:NextPage<{element:lobbyElement,setActiveElement:React.Dispatch<React.SetStateAction<boolean>>,setCurrentElement:React.Dispatch<any>}> = ({element,setActiveElement,setCurrentElement}):JSX.Element => {
  
  const activeElementHandler = () => {
    setActiveElement(true);
    setCurrentElement(element)
  }
  return (
    <div className=' w-[400px] mx-auto h-full bg-cover bg-center rounded-[0.5rem] font-poppins m-[2rem] flex flex-col sm:w-[80%]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  '>
             <div className="w-full h-[200px]  bg-cover bg-center rounded-[0.5rem] lg:min-h-[200px] lg:w-full lg:rounded-b-[0rem] lg:rounded-t-[0.5rem]   "  style={{backgroundImage:`url(${element.image})`}}>
                <div  className="min-h-[100%] rounded-b-[0.5rem] bg-[#00000046] transition-all opacity-0 hover:opacity-[1] flex justify-around items-center">
                    <Link href={element.link}><FontAwesomeIcon className='text-[1.5rem] cursor-pointer' icon={faArrowUpRightFromSquare}/></Link>
                    <FontAwesomeIcon onClick={activeElementHandler} className='text-[1.5rem] cursor-pointer' icon={faCircleInfo}/>
                </div>
            </div>
            <div className=" flex items-center  w-full fixed  sm:hidden bg-black top-0 left-0"></div>
    </div>
  )
}

export default LobbyElement