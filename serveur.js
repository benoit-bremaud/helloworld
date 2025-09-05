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

// Démarrer le serveur
app.listen(5000, () => console.log('🚀 Serveur lancé sur http://localhost:5000'));
