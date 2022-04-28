import React,{useContext} from 'react';
import { NextPage } from 'next';
// components
import LobbyElement from './LobbyElement';
// context 
import { ApiContext } from 'contexts/ApiContext';
// types
import { lobbyElement } from 'types';
const LobbyBody:NextPage = ():JSX.Element => {
  const {LobbyQuery} = useContext(ApiContext);
  

  return (
    <div className='min-h-[90vh] w-full text-white font-poppins flex lg:flex-col'>
      <div className=" flex flex-col items-center w-full ">
          {LobbyQuery.map((element:lobbyElement,index:number)=><LobbyElement key={index} element={element}/>)}
      </div>
    </div>
  )
}

export default LobbyBody