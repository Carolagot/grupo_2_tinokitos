const express = require("express");
const fs = require("fs");
const path = require("path");

const administradorController = {
    eliminarProducto: function () {
    },
    eliminarProductoDelete: function () {
    },
    productoDestacado: function () {
    },
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
            id: Date.now(),
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fotoProducto: './imagenes/fotosProductos' + req.file.filename,
            precio: req.body.precioProducto,
            categoria: req.body.categoria,
            stockProducto: req.body.stockProducto
        };

        usuarios.push(nuevoUsuario);
        const productosActualizadosJSON = JSON.stringify(usuarios);
        fs.writeFileSync(path.join(__dirname, '../data/productsBD.json'), prodcutosActualizadosJSON, 'utf8');
        res.redirect('/productDetail/' + nuevoProducto.id);
    },



}


module.exports = administradorController;