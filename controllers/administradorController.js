const express = require("express");
const fs = require("fs");
const path = require("path");

const administradorController = {
    editProduct: function (req, res) {
        res.render("editProduct");
    },
    editProductPut: function (req, res) {
        res.render("editProduct");
    },
    createProduct: function (req, res) {
        res.render("createProduct");
    },
    createProductPost: function (req, res) {
        console.log(req.file)
        const productosJson = fs.readFileSync(path.join(__dirname, '../data/productsBD.json'), 'utf-8');
        const productos = JSON.parse(productosJson);
        const nuevoProducto = {
            id: productos.lenght +1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fotoProducto: './productsPhotos/' + req.file.filename,
            precio: req.body.precioProducto,
            categoria: req.body.categoria,
            stockProducto: req.body.stockProducto
        };
        productos.push(nuevoProducto);
        const productosActualizadosJSON = JSON.stringify(productos);
        fs.writeFileSync(path.join(__dirname, '../data/productsBD.json'), productosActualizadosJSON, 'utf8');
        res.redirect('/productDetail/' + nuevoProducto.id);
    },
    eliminarProductoDelete: function (req, res) {
        const { id } = req.params;
        const productoIndex = producto.findIndex((producto) =>
            producto.id == id);
        producto.splice(productoIndex, 1);
        res.send('Se elimino un producto');
    },
}

module.exports = administradorController;