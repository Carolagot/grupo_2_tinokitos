const express = require("express");
const fs = require("fs");
const path = require("path");

const productosController = {
    productCart: function (req, res) {
        res.render("productCart");
    },
    productDetail: function (req, res) {
        const id = req.params.id;
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos= JSON.parse(productsJson);
        const productoPedido = productos.find(productoActual => productoActual.id === id);
        if (id > productos.length - 1) {
            res.send('El producto no existe');
        } else {
            res.render("productDetail", { product: productoPedido });
        }
    }
}

module.exports = productosController;