const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Producto = mongoose.model('Producto',
  new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
  Cliente: Cliente,
  Producto: Producto
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }
