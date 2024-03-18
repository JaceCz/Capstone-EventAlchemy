const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5003;

// Serve the static files from the specified directory
app.use(express.static(path.join(__dirname, 'build')));

// An API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

