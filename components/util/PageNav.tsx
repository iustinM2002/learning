import React from 'react';
import { NextPage } from 'next';

const PageNav:NextPage = ():JSX.Element => {
  return (
    <div className='w-full flex min-h-[10vh] items-center '>
        <h1 className='px-[4rem] font-bold text-[#FFC300] text-[1.5rem]'>Librarium</h1>
    </div>
  )
}

export default PageNav