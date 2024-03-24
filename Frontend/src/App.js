import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GameForm from './GameForm';
import GameList from './GameList';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await fetch(//TODO: Set up API
      );
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  const submitNewGame = async (newGameDetails) => {
    try {
      const response = await fetch(//API URL Here
       {
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
          <Switch>
            <Route path="/add-game">
              <GameForm onSubmit={submitNewGame} />
            </Route>
            <Route path="/">
              <div className="game-list">
                <h2>Available Games</h2>
                <GameList games={games} />
                <Link to="/add-game">
                  <button>Add New Game</button>
                </Link>
              </div>
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
