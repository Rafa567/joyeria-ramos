const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String, dni: String, telefono: String })
);

const Catalogo = mongoose.model('Catalogo',
  new mongoose.Schema({ nombre: String, precio: Number,material: String,categoria: String })
);


module.exports = {
  Cliente: Cliente,
  Catalogo: Catalogo
}
