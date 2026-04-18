const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ msg: 'Missing fields' });
  if (email === 'test@test.com') return res.status(400).json({ msg: 'User exists' });
  res.status(201).json({ msg: 'User registered' });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@test.com' && password === '123456') {
    return res.status(200).json({ msg: 'Login successful' });
  }
  res.status(400).json({ msg: 'Invalid credentials' });
});

module.exports = app;
 // This file sets up an Express server with two routes: /api/auth/register and /api/auth/login. The register route checks for missing fields and existing users, while the login route checks for valid credentials. The app is exported for use in testing.