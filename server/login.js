const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./user');

router.post('/login', async (req, res) => {
  const formData = req.body;

  try {
    // Find user by email
    const oldUser = await User.findOne({ email: formData.email });
    if (!oldUser) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isPassValid = await bcrypt.compare(formData.password, oldUser.password);
    if (!isPassValid) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userID: oldUser }, 'privatekey', { expiresIn: '30s' });

    console.log('login successful');
    res.json({ token: token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
