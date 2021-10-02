const mongoose = require('mongoose');
const schema = mongoose.Schema;

var conductorSchema = new schema({
    idDocumentoCond: {
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
    licencia: {
        type: String
    },
    clave: {
        type: String
    },
    estado: {
        type: Boolean, default: true
    },
}
,{
    collection: 'conductores'
});

module.exports = mongoose.model('Conductores', conductorSchema);
