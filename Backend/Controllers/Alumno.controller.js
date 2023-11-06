const Alumno = require('../Models/Alumno.model')

exports.crearAlumno = async (req, res) => {
    try {
        const nuevoAlumno = new Alumno(req.body); // Crear una instancia del modelo Alumno con los datos de la solicitud
        await nuevoAlumno.save(); // Guardar el alumno en la base de datos
        res.status(201).json({ mensaje: 'Alumno creado con éxito', alumno: nuevoAlumno });
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el alumno', detalle: error.message });
    }
};

// Función para obtener todos los alumnos
exports.obtenerAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find(); // Consultar todos los alumnos en la base de datos
        res.status(200).json(alumnos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los alumnos', detalle: error.message });
    }
};

exports.buscarAlumnoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const alumno = await Alumno.findById(id); // Buscar al alumno por su ID
        if (!alumno) {
            return res.status(404).json({ error: 'Alumno no encontrado' });
        }
        res.status(200).json(alumno);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el alumno', detalle: error.message });
    }
};

// Función para actualizar los datos de un alumno por su ID
exports.actualizarAlumno = async (req, res) => {
    const { id } = req.params;
    try {
        const alumnoActualizado = await Alumno.findByIdAndUpdate(id, req.body, { new: true }); // Encuentra y actualiza al alumno
        if (!alumnoActualizado) {
            return res.status(404).json({ error: 'Alumno no encontrado' });
        }
        res.status(200).json(alumnoActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el alumno', detalle: error.message });
    }
};

exports.eliminarAlumno = async (req, res) => {
    const { id } = req.params;
    try {
        const alumnoEliminado = await Alumno.findByIdAndDelete(id); // Encuentra y elimina al alumno por su ID
        if (!alumnoEliminado) {
            return res.status(404).json({ error: 'Alumno no encontrado' });
        }
        res.status(200).json({ mensaje: 'Alumno eliminado con éxito' });
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar el alumno', detalle: error.message });
    }
};