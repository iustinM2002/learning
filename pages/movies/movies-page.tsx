import React,{useEffect} from 'react';
// importing components
import Nav from '../../components/movies/nav';
import TitleCarousel from '../../components/movies/title-carousel';
import Movies from '../../components/movies/MovieBody/Movies';
import Footer from '../../components/movies/footer';
// import utils

const MoviesPage = () => {
    
    return (<div className='bg-gradient-to-r from-[#7303c0] to-[#ec38bc]'>
        <Nav/>
        <TitleCarousel/> 
         <Movies/>
         <Footer/>
    </div>);
}



export default MoviesPage;