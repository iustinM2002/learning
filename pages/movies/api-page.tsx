import React,{useMemo,useEffect} from "react";
// import components
import TableCont from "../../components/movies/Tables/table";
import { useSortBy, useTable } from "react-table";
import { useQuery } from "react-query";
import Nav from "../../components/movies/nav";
import Loading from "../../components/movies/Loading";

const ApiPage = () =>{
    const key = '8550cbc503198174b8c1f43b78c9cb14';
    
    const popularMovies = async ({pageParam = 1}) => {
        try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${pageParam}`);
        return await response.json()
        }catch{
            console.log('error')
        }
    }
    const { data, isLoading,isError} =  useQuery('popular2' , popularMovies);
    if(isLoading)return <Loading/>
    if(isError){return (<p>Is Error...</p>)}

    return(
        <div className="Api">
            <Nav/>
            <h1     >Api docs</h1>
            <TableCont data={data}/>
           
          
        </div>

    )
}


export default ApiPage;
