import React from 'react'
import { NextPage } from 'next';
import { Oval } from 'react-loader-spinner';

const Loading:NextPage = ():JSX.Element => {
  return (
    <div className='fixed min-h-[100vh] top-0 bg-black w-full z-[50] flex justify-center items-center'>
        <h2 className='text-white text-[2rem] px-[2rem] md:text-[1.2rem]'>Loading</h2>
        <Oval height="50" width="50" color='#7303c0' secondaryColor= "#7303c0"  ariaLabel='loading'/>
    </div>
  )
}

export default Loading