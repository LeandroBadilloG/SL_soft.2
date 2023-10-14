const mongoose = require('../config/config.bd');
const SchemnaClientes = new mongoose.Schema({

  nombre: {
    type: String,
    required: [true, 'Se requiere un nombre de cliente'],
    min: 2,
    max: 30,
  },
  apellido: {
    type: String,
    required: [true, 'Se requiere un apellido del cliente'],
    min: 2,
    max: 30,
  },
  documento: {
    type: String,
    required: [true, 'Se requiere un documento del cliente'],
    unique: true,
    min: 7,
  },
  celular: {
    type: String,
    default: 'Sin registrar numero celular',
    min: 10,
    max: 13,
  },
  correo: {
    type: String,
    required: [true, 'Se requiere un correo'],
    unique: true,
  },
  direccion: {
    type: String,
    default: 'Sin registrar direccion',
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'usuarios.model',
  },

}, {timestamps: true});

const nuevoCliente = mongoose.model('clientes', SchemnaClientes);
module.exports = nuevoCliente;
