const express = require('express');
const router = express.Router();
const alumnoController = require('../Controllers/Alumno.controller'); // Asegúrate de que la ruta sea correcta

// Ruta para crear un nuevo alumno
router.post('/alumnos', alumnoController.crearAlumno);

// Ruta para buscar un alumno por su ID
router.get('/alumnos/:id', alumnoController.buscarAlumnoPorId);

// Ruta para obtener todos los alumnos
router.get('/alumnos', alumnoController.obtenerAlumnos);

// Ruta para actualizar los datos de un alumno por su ID
router.put('/alumnos/:id', alumnoController.actualizarAlumno);

// Ruta para eliminar un alumno por su ID
router.delete('/alumnos/:id', alumnoController.eliminarAlumno);



module.exports = router;