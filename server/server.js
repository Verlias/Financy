const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware to enable CORS for all routes

// Define a route to handle sign-up
app.post('/api/signup', (req, res) => {
  const formData = req.body;
  // Process the form data (e.g., save to a database)
  console.log('Sign up data received:', formData);
  // Send a response back to the frontend
  res.send({ message: 'Sign up successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
