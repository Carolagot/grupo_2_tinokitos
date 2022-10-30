const express = require("express");
const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");

const usuariosController = {
    login: function (req, res) {
        res.render("login", { usuario: { tipo: "usuario" } });
    },
    register: function (req, res) {
        res.render("register", { usuario: { tipo: "usuario" } });
    },
    postRegister: function (req, res) {
        console.log(req.body)
        const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
        const usuarios = JSON.parse(usuariosJson);
        const constraseñaHasheada = bcryptjs.hashSync(req.body.password, 10);
        const nuevoUsuario = {
            id: Date.now(),
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            password: constraseñaHasheada,
            categoria: req.body.categoria,
            fotosUsuarios: '/imagenes/fotosUsuarios/' + req.file.filename,
            notificaciones: req.body.notificaciones,
            tipo: "usuario"
        };
        usuarios.push(nuevoUsuario);
        const usuariosActualizadosJSON = JSON.stringify(usuarios);
        fs.writeFileSync(path.join(__dirname, '../data/userBD.json'), usuariosActualizadosJSON, 'utf8');
        res.cookie("email", req.body.email, { maxAge: 10800 });
        res.redirect("/usuarios/login");
    },
    loginProcess: (req, res) => {
        const userData = req.body; //guarda los datos ingresados en el formulario de login
        const usersJSON = fs.readFileSync(path.join(__dirname, "../data/userBD.json"), "utf-8"); //buscamos usuario en la base de datos
        const usuarios = JSON.parse(usersJSON);
        const usuarioLogueado = usuarios.find(thisUser => thisUser.email === userData.mail); //busca el usuario con el email ingresado
        console.log(usuarioLogueado)
        if (usuarioLogueado) { // si se encontro el usuario con ese email..

            let contraseñaCorrecta = bcryptjs.compareSync(userData.password, usuarioLogueado.password);
            // let contraseñaCorrecta = userData.password == usuarioLogueado.password  //chequeamos si la contraseña es correcta
            if (contraseñaCorrecta) { // si es correcta...
                res.cookie("email", req.body.email, { maxAge: 1080000 }); //creamos una cookie
                res.redirect("/"); //redireccionamos al index
            } else { //si no es correcta
                res.redirect("/usuarios/login") //te envia a loguearte
            }
        } else { // si no se encontro usuario con ese email
            res.redirect("/usuarios/login")
        }
    },
    logout: function (req, res) {
            res.clearCookie('Email');
            return res.redirect('/');
        }
    }


module.exports = usuariosController;