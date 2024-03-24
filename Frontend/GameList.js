import React from 'react';
import GameDetails from './GameDetails';

function GameList({ games }) {
  return (
    <div className="game-list">
      <h2>Available Games</h2>
      {games.map((game) => (
        <GameDetails key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;
