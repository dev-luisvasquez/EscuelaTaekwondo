// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Alumno = require('./Routes/Alumno.router');



const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://vercel-admin-user:rzwGqsFfEAOJGCSm@cluster0.kd6vmor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

app.use('/api', Alumno);


// Maneja eventos de conexión
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Error de conexión a MongoDB:', err);
});

db.once('open', () => {
  console.log('Conexión a MongoDB establecida');
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});