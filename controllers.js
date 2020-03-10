const { Cliente, Catalogo } = require("./models.js");


// ------- CLIENTES

exports.readClientes = (req, res) => {
    Cliente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readCliente = (req, res) => {
    Cliente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteCliente = (req, res) => {
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateCliente = (req, res) => {
    Cliente.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos, dni: req.body.dni, telefono: req.body.telefono } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createCliente = (req, res) => {
    const cliente = new Cliente({ nombre: req.body.nombre, apellidos: req.body.apellidos, dni: req.body.dni, telefono: req.body.telefono});
    cliente.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}


// ------ Catalogo

exports.readCatalogos = (req, res) => {
    Catalogo.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.readCatalogo = (req, res) => {
    Catalogo.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.deleteCatalogo = (req, res) => {
    Catalgo.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}

exports.updateCatalogo = (req, res) => {
    Catalogo.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, precio: req.body.precio,material: req.body.material ,categoria: req.body.categoria  } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        }
    );
}

exports.createCatalogo = (req, res) => {
    const catalogo = new Catalogo({ nombre: req.body.nombre, precio: req.body.precio,material: req.body.material ,categoria: req.body.categoria });
    catalogo.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
}