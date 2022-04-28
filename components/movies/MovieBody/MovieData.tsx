import React from 'react';
import { NextPage } from 'next';
// components
import Movie from './Movie';

const MovieData:NextPage<{movieData:any,fetchNextPage:any, setActiveSelect:any,setMovieId:any}> = ({movieData,fetchNextPage,setActiveSelect,setMovieId}):JSX.Element => {
  return (
    <div>         
        <div className="popular-movies w-full grid justify-items-center  grid-cols-auto gap-y-[5rem] gap-x-[0rem] items-center ">  
            {movieData!.pages.map((page:any) => page.data.map((movie:any,index:number) => <Movie key={index}  movie={movie} setActiveSelect={setActiveSelect} setMovieId={setMovieId}/>))}
        </div>
        <div className="button min-h-[10vh] flex justify-center items-center mt-[2rem] ">
              <button onClick={() => fetchNextPage()} className="bg-black hover:scale-[1.05] text-[#ffffff] text-[1.5rem] px-[0.7rem] py-[0.5rem] rounded-[1rem] transition-all">Load More</button>
        </div>
    </div>
  )
}

export default MovieData