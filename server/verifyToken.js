const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

const secretKey = 'privatekey';

const verifyToken = (req, res, next) => {
    const token = req.body.token;
    if (!token) {
        return res.status(403).json({ success: false, message: 'Token is required' });
    }
    jwt.verify(token, secretKey, (err) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Failed to authenticate token' });
        }
        next();
    });
};

module.exports = verifyToken;

/*app.post('/verify-token', verifyToken, (req, res) => {
    res.status(200).json({ success: true, message: 'Token is valid' });
});*/




/*const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, 'privatekey', (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden (invalid token)
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;*/
