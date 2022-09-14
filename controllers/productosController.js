const express = require("express");
const fs = require("fs");
const path = require("path");

const productosController = {
    productCart: function (req, res) {
        res.render("productCart");
    },
    productDetail: function (req, res) {
        const id = req.params.id;
        if (id > productos.length - 1) {
            res.send('El producto no existe');
        } else {
            res.send(productos[id]);
        }
    },
}


module.exports = productosController;