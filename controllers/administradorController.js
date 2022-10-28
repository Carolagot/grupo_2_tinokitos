const express = require("express");
const fs = require("fs");
const path = require("path");

const administradorController = {
    editProduct: function (req, res) {
        const id = req.params.id;
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        const productoPedido = productos.find(productoActual => productoActual.id == id);
        if (productoPedido) {
            res.render("editProduct", { product: productoPedido })
        } else {
            res.send('El producto no existe');
        }
    },
    editProductPut: function (req, res) {
        let idProducto = Number(req.params.id);
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        let listaSinEditado = productos.filter(productoActual => productoActual.id != idProducto);

        let productoActualizado = {
            id: idProducto,
            nombre: req.body.nombre,
            descripcion: req.body.descripcionProducto,
            fotoProducto: '/imagenes/fotosProductos/' + req.file.filename,
            precio: req.body.precioProducto,
            categoria: req.body.categoria,
            condicion: req.body.condicion,
            stockProducto: req.body.stockProducto
        }

        productoAEditar = productoActualizado;

        listaSinEditado.push(productoAEditar);

        const productosActualizadosJSON = JSON.stringify(listaSinEditado);
        fs.writeFileSync(path.join(__dirname, '../data/productsBD.json'), productosActualizadosJSON, 'utf8');

        res.redirect("../administrador/productListAdministrador")
    },
    createProduct: function (req, res) {
        res.render("createProduct");
    },
    createProductPost: function (req, res) {
        console.log(req.file)
        const productosJson = fs.readFileSync(path.join(__dirname, '../data/productsBD.json'), 'utf-8');
        const productos = JSON.parse(productosJson);
        const nuevoProducto = {
            id: productos.length + 1,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            fotoProducto: '/imagenes/fotosProductos/' + req.file.filename,
            precio: req.body.precioProducto,
            categoria: req.body.categoria,
            condicion: req.body.condicion,
            stockProducto: req.body.stockProducto
        };
        productos.push(nuevoProducto);
        const productosActualizadosJSON = JSON.stringify(productos);
        fs.writeFileSync(path.join(__dirname, '../data/productsBD.json'), productosActualizadosJSON, 'utf8');
        res.redirect('/productos/productDetail/' + nuevoProducto.id);
    },
    eliminarProductoDelete: function (req, res) {
        const id = req.params.id;
        //console.log("eliminarProductoDelete");
        const productsJson = fs.readFileSync(path.join(__dirname, "../data/productsBD.json"), "utf-8");
        const productos = JSON.parse(productsJson);
        productosActualizado = productos.filter(productoActual => productoActual.id != id);
        const productosActualizadosJSON = JSON.stringify(productosActualizado, null, " ");
        fs.writeFileSync(path.join(__dirname, '../data/productsBD.json'), productosActualizadosJSON, 'utf8');
        res.render('productoEliminado');
    },
    productListAdministrador:
        function (req, res) {
            const userEmail = req.cookies.email;
            const productosJson = fs.readFileSync(path.join(__dirname, '../data/productsBD.json'), 'utf-8');
            const productos = JSON.parse(productosJson);
            if (userEmail) {
                const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
                const usuarios = JSON.parse(usuariosJson);
                const user = usuarios.find(usuarioActual => usuarioActual.email == userEmail)
                if (user) {
                    res.render("productListAdministrador", { usuario: user, productos })
                } else {
                    res.render("productListAdministrador", { usuario: { tipo: "usuario" }, productos })
                }
            } else {
                res.render("productListAdministrador", { usuario: { tipo: "usuario" }, productos })
            }
            res.render('productListAdministrador', { productos, usuario });
        },
}

module.exports = administradorController;