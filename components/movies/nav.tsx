import React from "react";
import Link from "next/link";
import { NextPage } from "next";

const Nav:NextPage = ():JSX.Element =>{
    return(
        <div className="bg-gradient-to-r from-[#7303c0] to-[#ec38bc] min-h-[10vh] flex items-center justify-between md:flex-col md:pb-[1rem] ">
            <div id="logo">
                <h2 className="text-white text-[2rem] font-poppins px-[4rem] md:text-[1.2rem] md:py-[1rem]">Reflection</h2>
            </div>
            <ul className="nav-links flex font-poppins w-[40%] justify-around text-white md:w-full ">
               <Link href="/movies/movies-page"><li className="cursor-pointer">Home</li></Link>
               <Link href="/movies/api-page"><li className="cursor-pointer">Api Docs</li></Link>    
            </ul>
        </div>
    )
}

export default Nav;