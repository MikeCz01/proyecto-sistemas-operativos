const express = require('express');
const path = require('path');
const { getSystemInfo } = require('./utils/systemInfo');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir HTML desde /views
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Ruta técnica del sistema
app.get('/info', (req, res) => {
  const info = getSystemInfo();
  res.json(info);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
