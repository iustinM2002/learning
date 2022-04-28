import React from 'react'
// import api
import Game from '../../components/game/game';
import { newGamesUrl } from '../../components/game/api';

const popularGames = ({newGames}:{newGames:any}) => {
  return (
    <div>
      {newGames.results.map((game:any) => <Game key={game.id} game={game} />)}
    </div>
  )
}

export const getServerSideProps   =  async () =>{
  const res = await fetch(newGamesUrl());
  const newGames = await res.json();

  return{
    props:{newGames}
  }
}


export default popularGames