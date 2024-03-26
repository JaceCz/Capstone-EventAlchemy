import React from 'react';
import GameDetails from './GameDetails';

function GameList({ games }) {
  return (
    <ul>
      {games.map((game) => (
        <li key={game._id}>
          {/* Assuming each game object has an "_id" property */}
          <GameDetails game={game} />
        </li>
      ))}
    </ul>
  );
}

export default GameList;
