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
                res.render("productCart", {usuarioLogueado: req.session.usuarioLogueado}
)
            } else {
                res.render("productCart", {usuarioLogueado: req.session.usuarioLogueado}
                )
            }
        } else {
            res.render("productCart", {usuarioLogueado: req.session.usuarioLogueado}
            )
        }
        res.render('productCart',{usuarioLogueado: req.session.usuarioLogueado}
        );
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
                res.render("productList", {usuarioLogueado: req.session.usuarioLogueado, productos })
            } else {
                res.render("productList", {usuarioLogueado: req.session.usuarioLogueado, productos })
            }
        } else {
            res.render("productList", {usuarioLogueado: req.session.usuarioLogueado, productos })
        }
        res.render('productList', { productos,usuarioLogueado: req.session.usuarioLogueado});
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
                    res.render("productDetail", {usuarioLogueado: req.session.usuarioLogueado, product: productoPedido })
                } else {
                    res.render("productDetail", {usuarioLogueado: req.session.usuarioLogueado, product: productoPedido })
                }
            } else {
                res.render("productDetail", {usuarioLogueado: req.session.usuarioLogueado, product: productoPedido })
            }
            res.render('productDetail', {usuarioLogueado: req.session.usuarioLogueado,product: productoPedido });
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
                res.render ("horaDeComer", {usuarioLogueado: req.session.usuarioLogueado, productosComer})
            } else {
                res.render ("horaDeComer", {usuarioLogueado: req.session.usuarioLogueado,productosComer})
            }
        }else {
            res.render ("horaDeComer", {usuarioLogueado: req.session.usuarioLogueado,productosComer})
        }
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
                res.render ("horaDeJugar",{usuarioLogueado: req.session.usuarioLogueado, productosJugar})
            } else {
                res.render ("horaDeJugar", {usuarioLogueado: req.session.usuarioLogueado,productosJugar})
            }
        }else {
            res.render ("horaDeJugar", {usuarioLogueado: req.session.usuarioLogueado,productosJugar})
        }
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
                res.render ("horaDeDormir", {usuarioLogueado: req.session.usuarioLogueado, productosJugar})
            } else {
                res.render ("horaDeDormir",{usuarioLogueado: req.session.usuarioLogueado, productosDormir})
            }
        }else {
            res.render ("horaDeDormir", {usuarioLogueado: req.session.usuarioLogueado,productosDormir})
        }
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
                res.render ("horaDePasear", {usuarioLogueado: req.session.usuarioLogueado, productosPasear})
            } else {
                res.render ("horaDePasear", {usuarioLogueado: req.session.usuarioLogueado,productosPasear})
            }
        }else {
            res.render ("horaDePasear", {usuarioLogueado: req.session.usuarioLogueado ,productosPasear})
        }
    },
}

module.exports = productosController;