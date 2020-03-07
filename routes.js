const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD


router.get    ("/clientes",      cors(), controller.readClientes);   // Read All
router.get    ("/clientes/:id",  cors(), controller.readCliente);    // Read
router.delete ("/clientes/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/clientes/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/clientes",      cors(), controller.createCliente);  // Create

router.get    ("/catalogos",     cors(), controller.readCatalogos);  // Read All
router.get    ("/catalogos/:id", cors(), controller.readCatalogo);   // Read
router.delete ("/catalogos/:id", cors(), controller.deleteCatalogo); // Delete
router.put    ("/catalogos/:id", cors(), controller.updateCatalogo); // Update
router.post   ("/catalogos",     cors(), controller.createCatalogo); // Create


module.exports = router;
