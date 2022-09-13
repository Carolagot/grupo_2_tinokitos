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
    productosDetail:function(req, res){
        const id = req.params.id;
        if (id > productos.length - 1){
            res.send('El producto no existe');
        } else {
            res.send(productos[id]);
        }
    }
    
}


module.exports = administradorController;