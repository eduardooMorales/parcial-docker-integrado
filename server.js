const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    nombre: 'Estiven Eduardo Morales Rodriguez',
    expediente: '25907',
    codigo_estudiantil: 'mr22i04002',
    mensaje: 'Bienvenido al parcial de Implantación de Sistemas'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
