const express = require("express");
const fs = require("fs");
const path = require("path");

const productosController = {
    productCart: function (req, res) {
        res.render("productCart");
    },
    productList: function (req, res) {
        const productosJson = fs.readFileSync(path.join(__dirname, '../data/productsBD.json'), 'utf-8');
        const productos = JSON.parse(productosJson);
        res.render("productList", {productos});
    },
    productDetail: function (req, res) {
        const id = req.params.id;
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const productoPedido = productos.find(productoActual => productoActual.id == id);
        console.log(productos);
        if (productoPedido) {
            res.render("productDetail", { product: productoPedido })
        } else {
            res.send('El producto no existe');
        }
    },
    productHoraDeComer: function (req, res) {
        const id = req.params.id;
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const categoriaPedido = productos.filter(categoriaActual => categoriaActual.categoria == "Hora de Comer");
        console.log(productos);
        if (categoriaPedido) {
            res.render("horaDeComer", { product: categoriaPedido })
        } else {
            res.send('La categoria no existe');
        }
    },
    
}

module.exports = productosController;