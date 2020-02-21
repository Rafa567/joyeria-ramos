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

router.get    ("/productos",     cors(), controller.readProductos);  // Read All
router.get    ("/productos/:id", cors(), controller.readProducto);   // Read
router.delete ("/productos/:id", cors(), controller.deleteProducto); // Delete
router.put    ("/productos/:id", cors(), controller.updateProducto); // Update
router.post   ("/productos",     cors(), controller.createProducto); // Create


module.exports = router;
