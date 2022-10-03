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
        if (productoPedido) {
            res.render("productDetail", { product: productoPedido })
        } else {
            res.send('El producto no existe');
        }
    },
    productHoraDeComer: function (req, res) {
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const productosComer = productos.filter(productoActual => productoActual.categoria === "Hora de Comer");
        res.render("horaDeComer", {productosComer})
    },
    productHoraDeJugar: function (req, res) {
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const productosJugar = productos.filter(productoActual => productoActual.categoria === "Hora de Jugar");
        res.render("horaDeJugar", {productosJugar})
    },
    productHoraDeDormir: function (req, res) {
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const productosDormir = productos.filter(productoActual => productoActual.categoria === "Hora de Dormir");
        res.render("horaDeDormir", {productosDormir})
    },
    productHoraDePasear: function (req, res) {
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const productosPasear = productos.filter(productoActual => productoActual.categoria === "Hora de Pasear");
        res.render("horaDePasear", {productosPasear})
    },

}

module.exports = productosController;