import React, { useState } from 'react';

function GameForm({ onSubmit }) {
  const [gameDetails, setGameDetails] = useState({
    managerName: '',
    scheduledDateTime: '',
    admission: '',
    description: '',
    availableSlots: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(gameDetails);
  };

  return (
    <div className="game-form">
      <h2>Create a New Pickup Game</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="managerName">Manager's Name:</label>
        <input
          type="text"
          id="managerName"
          name="managerName"
          value={gameDetails.managerName}
          onChange={handleChange}
          required
        />
        <label htmlFor="scheduledDateTime">Scheduled Date/Time:</label>
        <input
          type="datetime-local"
          id="scheduledDateTime"
          name="scheduledDateTime"
          value={gameDetails.scheduledDateTime}
          onChange={handleChange}
          required
        />
        <label htmlFor="admission">Admission:</label>
        <input
          type="text"
          id="admission"
          name="admission"
          value={gameDetails.admission}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={gameDetails.description}
          onChange={handleChange}
          required
        />
        <label htmlFor="availableSlots">Available Slots:</label>
        <input
          type="number"
          id="availableSlots"
          name="availableSlots"
          value={gameDetails.availableSlots}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GameForm;
