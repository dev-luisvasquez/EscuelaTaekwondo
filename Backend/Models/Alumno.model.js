const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    fechaNacimiento: {
        type: Date,
        require: true
    },
    membresiaAnual: {
        estado: {
            type: Boolean,
            default: false // Por defecto, la membresía no está pagada
        }
    },
    memebresiaMensual: {
        estado: {
            type: Boolean,
            default: false
        },
        tipo:{
            type: String
        }
    },
    fechaCreacion: {
        type: Date,
        default: Date.now, // Por defecto, se establecerá la fecha actual al crear el café
      },

}, {versionKey: false})

const Alumno = mongoose.model('Alumno', AlumnoSchema, 'Alumno')

module.exports = Alumno