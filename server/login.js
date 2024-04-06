const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./user');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isPassValid = await bcrypt.compare(password, oldUser.password);
    if (!isPassValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

    // Send token to the client
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
