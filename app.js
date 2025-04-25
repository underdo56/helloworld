// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number (3000 is common for development)
const PORT = 3001;

// Create a route for the home page
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});