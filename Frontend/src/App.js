import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import GameForm from './GameForm';
import GameList from './GameList';
import axios from 'axios';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios.get('http://localhost:3000/games');
      setGames(response.data); 
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  const submitNewGame = async (newGameDetails) => {
    try {
      const response = await fetch('https://example.com/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGameDetails),
      });
      const data = await response.json();
      console.log('New game added:', data);
    } catch (error) {
      console.error('Error adding new game:', error);
    }
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Pickup Game App</h1>
        </header>

        <section className="content">
          <Routes>
            <Route path="/add-game" element={<GameForm onSubmit={submitNewGame} />} />
            <Route path="/" element={
              <div className="game-list">
                <h2>Available Games</h2>
                <GameList games={games} />
                <Link to="/add-game">
                  <button>Add New Game</button>
                </Link>
              </div>
            } />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
