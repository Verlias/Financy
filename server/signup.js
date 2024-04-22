const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('./user');

router.post('/signup', async (req, res) => {
  const formData = req.body;

  try {
    // Check if user already exists
    const oldUser = await User.findOne({ email: formData.email });
    if (oldUser) {
      console.log('User already exists')
      return res.status(201).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPass = await bcrypt.hash(formData.password, 10);
    const hashedConfirmPass = await bcrypt.hash(formData.confirmPassword, 10);

    // Create a new user
    const newUser = new User({
      name: formData.name,
      email: formData.email,
      password: hashedPass,
      confirmPassword: hashedConfirmPass
    });

    // Save the user to the database
    await newUser.save();

    console.log('Sign up data received:', formData);
    //res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
