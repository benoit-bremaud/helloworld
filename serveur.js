const express = require('express');
const app = express();

// Route racine
app.get('/', (req, res) => {
  res.send('Mini Serveur Express');
});

// Démarrer le serveur
app.listen(5000, () => console.log('🚀 Serveur lancé sur http://localhost:5000'));
