const express = require('express');
const VehiculoController = require("../controllers/VehiculoController");

class vehiculo{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new VehiculoController.default();
        this.router.get("/vehicles", objServerC.getAllVehicles);
        this.router.get("/vehicles/:id", objServerC.getVehicles);
        this.router.post("/vehicles", objServerC.register);
        this.router.put("/vehicles", objServerC.update);
        this.router.delete("/vehicles", objServerC.deleteVehicles);        
    }
}

exports.default = vehiculo;