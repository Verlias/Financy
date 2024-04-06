const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const signupRoute = require('./signup');
const loginRoute = require('./login');

const uri = "mongodb+srv://rayanreddy29:iVBSdMuxUjsXOU2b@financyusers.1xkznie.mongodb.net/?retryWrites=true&w=majority&appName=FinancyUsers";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
// Create a Mongoose client with a MongoClientOptions object to set the Stable API version
mongoose.connect(uri, clientOptions)
  .then(() => console.log('mongo connect successful'))
  .catch(error => console.error('mongo connect error:', error));

const signupSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String
});

const Signup = mongoose.model('Signup', signupSchema);

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware to enable CORS for all routes

// Define a route to handle sign-up
app.post('/api/signup', async (req, res) => {
  const formData = req.body;
  // Process the form data (e.g., save to a database)
  try{
    const newSignup = new Signup(formData);
    await newSignup.save();

    console.log('Sign up data received:', formData);
    res.send({ message: 'Sign up successful' });
  } catch (error) {
    console.error('error on mongo save', error);
    res.status(500).send({ message: 'server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




/*
app.use('/api', signupRoute);
app.use('/api', loginRoute);
*/