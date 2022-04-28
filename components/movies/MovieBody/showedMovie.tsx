import { NextPage } from 'next'
import React from 'react';
import { useQuery} from 'react-query';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MovieDetialsTable from './MovieDetialsTable';
import Loading from '../Loading';
import {motion} from 'framer-motion';
import {show} from '../../util/Transitions'
// fontawesome
interface fetchedMovies{
    movieId:number;
    setActiveSelect:React.Dispatch<React.SetStateAction<Boolean>>;
}
const fetchMovieById:any = async ({queryKey}:{queryKey:string}) => await(await fetch(`https://api.themoviedb.org/3/movie/${queryKey}?api_key=8550cbc503198174b8c1f43b78c9cb14&language=en-US`)).json();
const ShowedMovie:NextPage<fetchedMovies> = ({movieId,setActiveSelect}) => {
    const {data,isLoading}:{data:any,isLoading:Boolean} = useQuery(`${movieId}`,fetchMovieById);
    if(isLoading) return <Loading/>
    
  return (
    <motion.div variants={show} initial='hidden' animate='show'  className='fixed z-[100] top-0 left-0 w-full min-h-full flex justify-center items-center bg-[#00000059]'>
        <div className="min-h-[90vh] bg-white w-[90%] rounded-[1rem] relative md:w-full md:min-h-[100vh] md:rounded-[0rem]">
        <div className="w-full min-h-[45vh] bg-center bg-no-repeat bg-cover text-white font-poppins flex flex-col justify-end rounded-t-[1rem] md:rounded-t-[0rem]"  style={ {backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + data.backdrop_path + "\")"} }></div> 
            <div className="absolute top-[0.5rem] right-[1rem] cursor-pointer bg-white hover:bg-[#ffffff48] px-[0.5rem] py-[0.2rem] transition-all rounded-full flex justify-center items-center" onClick={() => setActiveSelect(false)}><FontAwesomeIcon className='text-[1.5rem]' icon={faXmark}/></div>
            <MovieDetialsTable movie={data}/>
        </div>
    </motion.div>
  )
}

export default ShowedMovie