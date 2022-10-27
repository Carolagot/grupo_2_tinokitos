const express = require("express");
const fs = require("fs");
const path = require("path");

const productosController = {
    productCart: function (req, res) {
        const userEmail = req.cookies.email;
        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find(usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render("productCart", { usuario: user })
            } else {
                res.render("productCart", { usuario: { tipo: "usuario" } })
            }
        } else {
            res.render("productCart", { usuario: { tipo: "usuario" } })
        }
        res.render('productCart');
    },
    productList: function (req, res) {
        const userEmail = req.cookies.email;
        const productosJson = fs.readFileSync(path.join(__dirname, '../data/productsBD.json'), 'utf-8');
        const productos = JSON.parse(productosJson);
        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find(usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render("productList", { usuario: user, productos })
            } else {
                res.render("productList", { usuario: { tipo: "usuario" }, productos })
            }
        } else {
            res.render("productList", { usuario: { tipo: "usuario" }, productos })
        }
        res.render('productList', { productos });
    },
    productDetail: function (req, res) {
        const userEmail = req.cookies.email;
        const id = req.params.id;
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const productoPedido = productos.find(productoActual => productoActual.id == id);
        if (productoPedido) {
            if (userEmail) {
                const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
                const usuarios = JSON.parse(usuariosJson);
                const user = usuarios.find(usuarioActual => usuarioActual.email == userEmail)
                if (user) {
                    res.render("productDetail", { usuario: user, product: productoPedido })
                } else {
                    res.render("productDetail", { usuario: { tipo: "usuario" }, product: productoPedido })
                }
            } else {
                res.render("productDetail", { usuario: { tipo: "usuario" }, product: productoPedido })
            }
            res.render('productDetail', { product: productoPedido });
        } else {
            res.send('El producto no existe');
        }
    },
    productHoraDeComer: function (req, res) {
        const userEmail = req.cookies.email;
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const productosComer = productos.filter(productoActual => productoActual.categoria === "Hora de Comer");

        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find (usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render ("horaDeComer", {usuario: user, productosComer})
            } else {
                res.render ("horaDeComer", {usuario: {tipo:"usuario"},productosComer})
            }
        }else {
            res.render ("horaDeComer", {usuario: {tipo:"usuario"},productosComer})
        }
        res.render('horaDeComer',{ productosComer });
    },
    productHoraDeJugar: function (req, res) {
        const userEmail = req.cookies.email;
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const productosJugar = productos.filter(productoActual => productoActual.categoria === "Hora de Jugar");

        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find (usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render ("horaDeJugar", {usuario: user, productosJugar})
            } else {
                res.render ("horaDeJugar", {usuario: {tipo:"usuario"},productosJugar})
            }
        }else {
            res.render ("horaDeJugar", {usuario: {tipo:"usuario"},productosJugar})
        }
        res.render('horaDeJugar',{ productosJugar });
    },
    productHoraDeDormir: function (req, res) {
        const userEmail = req.cookies.email;
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const productosDormir = productos.filter(productoActual => productoActual.categoria === "Hora de Dormir");

        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find (usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render ("horaDeDormir", {usuario: user, productosJugar})
            } else {
                res.render ("horaDeDormir", {usuario: {tipo:"usuario"}, productosDormir})
            }
        }else {
            res.render ("horaDeDormir", {usuario: {tipo:"usuario"},productosDormir})
        }
        res.render('horaDeDormir',{ productosDormir });
    },
    productHoraDePasear: function (req, res) {
        const userEmail = req.cookies.email;
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const productosPasear = productos.filter(productoActual => productoActual.categoria === "Hora de Pasear");

        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find (usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render ("horaDePasear", {usuario: user, productosPasear})
            } else {
                res.render ("horaDePasear", {usuario: {tipo:"usuario"},productosPasear})
            }
        }else {
            res.render ("horaDePasear", {usuario: {tipo:"usuario"},productosPasear})
        }
        res.render('horaDePasear',{ productosPasear });
    },
}

module.exports = productosController;