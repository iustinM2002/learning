import React from 'react'
// import api

import Game from '../../components/game/game';
import {upcomingGamesUrl } from '../../components/game/api';




const popularGames = ({upcoming}:{upcoming:any}) => {
  
  return (
    <div>
      {upcoming.results.map((game:any) => <Game key={game.id} game={game} />)}
    </div>
  )
}

export const getServerSideProps   =  async () =>{
  const res = await fetch(upcomingGamesUrl());
  const upcoming = await res.json();


  return{
    props:{upcoming}
  }
}


export default popularGames