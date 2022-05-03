import React,{useEffect, useState} from 'react';
import { NextPage } from 'next';
// components
import PageNav from '../components/util/PageNav';
import LobbyBody from '../components/lobby/LobbyBody';
import LobbyNav from '@/components/lobby/LobbyNav';



const Lobby:NextPage = ():JSX.Element => {
  const [logged,setLogged] = useState<string | null >('false');
  useEffect(()=>{
      if(sessionStorage.getItem('logged')==='true')
        setLogged(sessionStorage.getItem('logged'))
  },[])
  return (
    <div className='bg-[#571845]'>
    { logged === 'true' ?
    <div className="text-white">

      <LobbyNav/>
      <LobbyBody/>
    </div>
      : 
      <div className='flex w-full min-h-[100vh] justify-center items-center text-white '>Please log in.</div>}
    </div>
    
    
  )
}

export default Lobby