//Importar express
const express = require('express');
const serverVehiculo = require('./routers/vehiculo');
const serverAdministrador = require('./routers/administrador');
const serverConductor = require('./routers/conductor');
//Importar mongoose
const mongoose = require('mongoose');
//Importar url de conexión a la BD
const database = require('./database/db');

class Server{
    //constructor
    constructor(){
        this.conectarBD();
        this.app = express();
        //Indicar el puerto por el que se ejecutará el servidor
        this.app.set('port', process.env.PORT || 3000);
        //Indicar que las solicitudes http se trabajará en JSON
        this.app.use(express.json());
        /**
         * 
         * ******************Rutas**********************
         * 
         * ******/
        const router = express.Router();
        router.get('/', (req, res)=>{
            console.log("Nueva conexión");
            res.status(200).json({message: "Hola mundo!"});
        });
        const serverV = new serverVehiculo.default();
        const serverA = new serverAdministrador.default();
        const serverC = new serverConductor.default();
        
        //añadir las rutas al servidor
        this.app.use(serverV.router);
        this.app.use(serverA.router);
        this.app.use(serverC.router);
        this.app.use(router);
        //Levantar el servidor/correr el servidor
        this.app.listen(this.app.get('port'), ()=>{
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        });
    }

    conectarBD(){
        mongoose.connect(database.db).then(()=>{
            console.log("Conexión a BD con éxito");
        }).catch((err)=>{
            console.error("Error de conexión");
        });
    }
}

const objServer = new Server();