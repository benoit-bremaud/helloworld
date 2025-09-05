const express = require('express');
const app = express();

const users = require('./src/data/users.json');

// Route racine
app.get('/', (req, res) => {
  res.send('Mini Serveur Express');
});

// Route getUsers
app.get('/users', (req, res) => {
  res.send(users);
});

// Route getUserById
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

// Démarrer le serveur
app.listen(5000, () => console.log('🚀 Serveur lancé sur http://localhost:5000'));
