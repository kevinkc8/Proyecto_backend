const mongoose = require('mongoose');
const schema = mongoose.Schema;

var vehiculoSchema = new schema({
    idPlaca: {
        type: String
    },
    kilometraje: {
        type: Number
    },
    tecnoMecanica: {
        type: Date
    },
    soat: {
        type: Date
    }, 
    tarjetaPropiedad: {
        type: String
    },
}
,{
    collection: 'vehiculos'
});

module.exports = mongoose.model('Vehiculos', vehiculoSchema);
