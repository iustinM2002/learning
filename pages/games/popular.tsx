import React from 'react'
// import api

import { popularGamesUrl } from '../../components/game/api';
import Game from '../../components/game/game';


const popularGames = ({popular}:{popular:any}) => {
  return (
    <div>
      {popular.results.map((game:any) => <Game key={game.id} game={game} />)}
    </div>
  )
}

export const getServerSideProps   =  async () =>{
  const res = await fetch(popularGamesUrl());
  const popular = await res.json();


  return{
    props:{popular}
  }
}


export default popularGames