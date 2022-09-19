const express = require("express");

const administradorController = {
    editProduct: function (req, res) {
        res.render("editProduct");
    },
    createProduct: function (req, res) {
        res.render("createProduct");
    },
    eliminarProductoDelete: function (req,res) {
        const { id } = req.params;
        const productoIndex = producto.findIndex((producto) =>
        producto.id == id);
        producto.splice(productoIndex, 1);
        res.send ('Se elimino un producto');
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