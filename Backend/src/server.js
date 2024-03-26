const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Game = require('./model');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const uri = 'mongodb://localhost:27017';
const dbName = 'gamesdb';

mongoose.connect(`${uri}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.get('/games', async (req, res) => {
    try {
      const games = await Game.find({});
      console.log('Retrieved games:', games); 
      res.json(games);
    } catch (error) {
      console.error('Error retrieving games:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
