import React,{useContext, useState} from 'react';
import { useMutation } from 'react-query';
import { NextPage } from 'next';
// components
import LobbyElement from './LobbyElement';
import LobbyAddProject from './LobbyAddProject';
// context 
import { ApiContext } from 'contexts/ApiContext';
// types
import { lobbyElement } from 'types';
const LobbyBody:NextPage = ():JSX.Element => {
  const {LobbyQuery,refetch} = useContext(ApiContext);
  const [activeAdd,setActiveAdd] = useState(false);


  return (
    <div className='min-h-[90vh] w-full text-white font-poppins flex flex-col'>
      <div className=" flex flex-col items-center w-full ">
          {LobbyQuery.map((element:lobbyElement,index:number)=><LobbyElement key={index} element={element}/>)}
      </div>
      <div className="w-full flex justify-center my-[0.5rem]">
        <button className='bg-black w-[150px] py-[0.5rem] px-[1rem] rounded-[0.5rem]' onClick={() => setActiveAdd(true)} >Add Project</button>  
      </div>
      {activeAdd ? <LobbyAddProject setActiveAdd={setActiveAdd}/> : ''}
    </div>
  )
}


export default LobbyBody