import React,{useState} from 'react'
import { gameDetailsURL } from './api';
import Image from 'next/image';
import Link from 'next/link';
// import './game.module.css'
// import images
import playstation from './img/playstation.svg';
import steam from './img/steam.svg';
import xbox from './img/xbox.svg';
import nintendo from './img/nintendo.svg';
import apple from './img/apple.svg';
import gamepad from './img/gamepad.svg';
import starEmpty from "./img/star-empty.png";
import starFull from './img/star-full.png'


const Game = ({game}:{game:any}) => {

    
  const getPlatform = (platform:string) =>{
    switch(platform){
        case "PlayStation 4":
            return playstation;
        case "PlayStation 5":
            return playstation;
        case "Xbox One":
            return xbox;
        case "Xbox Series S/X":
            return xbox;
        case "PC":
            return steam;
        case "Nintendo Switch":
            return nintendo;
        case "iOS":
            return apple;
        default:
            return gamepad;
    }
}
// starsss
const getStars = () =>{
    const stars = [];
    const rating = Math.floor(game.rating);
    for(let i = 1;i<= 5;i++){
        if(i <=rating){
            stars.push(<Image  height="24" width="24" alt="star" key={i} src={starFull.src}></Image>)
        }else{
            stars.push(<Image height="24" width="24" alt="star" key={i} src={starEmpty.src}></Image>)

        }
    }
    return stars;
}

    
  return (
    <div className='bg-no-repeat bg-cover bg-center min-h-[100vh] flex justify-center items-center text-poppins text-center' style={ {backgroundImage: "url(\"" + game.background_image + "\")"} }>
      <div className="game-details bg-[#ffffffaf] text-black min-h-[30vh] w-full flex flex-col justify-center items-center  ">
        <h2 className='game-name text-[1.5rem]'>{game.name}</h2>
        <h3 className=''>{game.released}</h3>
        <div className="stars">
          {getStars()}
        </div>
        <div className="platforms flex">
          {game.platforms.map((data:any) => <div className='mx-[0.3rem] 'key={data.platform.id}><Image  src={getPlatform(data.platform.name)}  ></Image></div> )}
           
        </div>
       <Link href="/games/game"><a href="" className="underline">Home</a></Link>
      </div>
     
    </div>
  )
}

export default Game