const express = require("express");

const administradorController = {
    editProduct: function (req, res) {
        res.render("editProduct");
    },
    createProduct: function (req, res) {
        res.render("createProduct");
    },
    eliminarProducto: function () {
    },
    productoDestacado: function () {
    },

}
module.exports = administradorController;