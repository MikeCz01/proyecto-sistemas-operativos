const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Proyecto de Sistemas Operativos</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            color: #333;
            text-align: center;
            padding: 50px;
          }
          .container {
            background-color: #fff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            display: inline-block;
          }
          h1 {
            color: #007BFF;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>¡Bienvenido a nuestro proyecto de Sistemas Operativos!</h1>
          <p>Esta aplicación está funcionando dentro de un contenedor Docker desplegado en Render.com.</p>
          <p><strong>Integrantes del equipo:</strong> [Nombre 1], [Nombre 2], [Nombre 3]</p>
          <p><strong>Materia:</strong> Sistemas Operativos</p>
          <p>Gracias por visitar nuestro proyecto 🚀</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
