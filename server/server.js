const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
require("dotenv").config(); // Import the dotenv module to access environment variables


const signupRoute = require('./signup');
const loginRoute = require('./login');

const uri = process.env.uri;


const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
// Create a Mongoose client with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri, clientOptions)
  .then(() => console.log('mongo connect successful'))
  .catch(error => console.error('mongo connect error:', error));

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware to enable CORS for all routes

app.use('/api', signupRoute);
app.use('/api', loginRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

 
