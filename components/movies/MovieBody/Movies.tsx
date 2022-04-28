import { NextPage } from "next";
import React, { useState } from "react";
import { useInfiniteQuery,dehydrate,QueryClient} from "react-query";

// import components
import Loading from "../Loading";
import MovieData from "./MovieData";
import ShowedMovie from "./showedMovie";

const key = '8550cbc503198174b8c1f43b78c9cb14';
const MoviesFetch: any   = async ({queryKey,pageParam = 1}:{queryKey:string,pageParam:any}) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${queryKey}?api_key=${key}&language=en-US&page=${pageParam}`);
    const {results } = await response.json()
    return {data :results,
            nextPage: pageParam + 1,
    }
}

const Movies:NextPage =  () :JSX.Element =>{

    const { data,fetchNextPage,hasNextPage,isFetching,isFetchingNextPage,isLoading,isError} =  useInfiniteQuery('popular' , MoviesFetch,{getNextPageParam:(lastPage:any,pages) => lastPage.nextPage} );
    const upcomingFetched =  useInfiniteQuery('upcoming' , MoviesFetch,{getNextPageParam:(lastPage:any,pages) => lastPage.nextPage} );
    const topFetched =  useInfiniteQuery('top_rated', MoviesFetch,{getNextPageParam:(lastPage:any,pages) => lastPage.nextPage} );
    const [activeSelect,setActiveSelect] = useState<Boolean>(false);
    const [movieId,setMovieId] = useState<number>(0)
    console.log(movieId)
    if(isLoading || upcomingFetched.isLoading || topFetched.isLoading) return <Loading/>
    if(isError) return <div>...Error</div>

    return(
        <div className="movies w-full" id="movies">
            <h1 className="text-[3rem] text-white p-[3rem] md:text-[1.5rem]">Popular Movies</h1>
            <MovieData movieData={data} fetchNextPage={fetchNextPage} setActiveSelect={setActiveSelect} setMovieId={setMovieId}/>
            <h1 className="text-[3rem] text-white p-[3rem] md:text-[1.5rem]">Latest Movies</h1>
            <MovieData movieData={upcomingFetched.data} fetchNextPage={upcomingFetched.fetchNextPage} setActiveSelect={setActiveSelect} setMovieId={setMovieId}/>
            <h1 className="text-[3rem] text-white p-[3rem] md:text-[1.5rem]">Top Rated Movies</h1>
            <MovieData movieData={topFetched.data} fetchNextPage={topFetched.fetchNextPage} setActiveSelect={setActiveSelect} setMovieId={setMovieId}/>
            {activeSelect ? <ShowedMovie movieId={movieId} setActiveSelect={setActiveSelect}/> : ''}
        </div>
    )
}
export function getServerSideProps(){
    const queryClient = new QueryClient();
    queryClient.prefetchQuery('popular',MoviesFetch)
    queryClient.prefetchQuery('upcoming',MoviesFetch)
    queryClient.prefetchQuery('top_rated',MoviesFetch)

    return{
        props:{
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export default Movies;