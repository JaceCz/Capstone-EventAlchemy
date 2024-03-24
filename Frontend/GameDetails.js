import React from 'react';

function GameDetails({ game }) {
  return (
    <div className="game-details">
      <h2>Game Details - {game.managerName}'s Game</h2>
      <p>Scheduled Date/Time: {game.scheduledDateTime}</p>
      <p>Admission: {game.admission}</p>
      <p>Description: {game.description}</p>
      <p>Available Slots: {game.availableSlots}</p>
    </div>
  );
}

export default GameDetails;
