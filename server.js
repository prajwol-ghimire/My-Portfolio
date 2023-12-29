const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.js'));
});

const PORT = 5000; // Change the port if needed
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
