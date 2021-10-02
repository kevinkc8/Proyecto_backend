const express = require('express');
const AdministradorController = require("../controllers/AdministradorController");

class administrador{
    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        const objServerC = new AdministradorController.default();
        this.router.get("/administrator", objServerC.getAllAdministrator);
        this.router.get("/administrator/:id", objServerC.getAdministrator);
        this.router.post("/administrator", objServerC.register);
        this.router.put("/administrator", objServerC.update);
        this.router.delete("/administrator", objServerC.deleteAdministrator);        
    }
}

exports.default = administrador;