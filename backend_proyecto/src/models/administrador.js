const mongoose = require('mongoose');
const schema = mongoose.Schema;

var administradorSchema = new schema({
    idDocumentoAdmin: {
        type: Number
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    email: {
        type: String
    }, 
    telefono: {
        type: Number
    },
    clave: {
        type: String
    },
    estado: {
        type: Boolean, default: true
    },
}
,{
    collection: 'administradores'
});

module.exports = mongoose.model('Administradores', administradorSchema);
