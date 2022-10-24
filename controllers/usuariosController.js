const express = require("express");
const fs = require("fs");
const path = require("path");
const bcryptjs = require ("bcryptjs");

const usuariosController = {
    login: function (req, res) {
        res.render("login");
    },
    register: function (req, res) {
        res.render("register");
    },
    postRegister: function (req, res) {
        console.log(req.body)
        const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
        const usuarios = JSON.parse(usuariosJson);
        const constraseñaHasheada = bcryptjs.hashSync (req.body.password, 10);
        const nuevoUsuario = {
            id: Date.now(),
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            password: constraseñaHasheada, 
            categoria: req.body.categoria,
            fotosUsuarios: '/imagenes/fotosUsuarios/' + req.file.filename,
            notificaciones:req.body.notificaciones,
            tipo:"comprador"
        };
        usuarios.push(nuevoUsuario);
        const usuariosActualizadosJSON = JSON.stringify(usuarios);
        fs.writeFileSync(path.join(__dirname, '../data/userBD.json'), usuariosActualizadosJSON, 'utf8');
        res.redirect("/");
    },
    loginProcess: (req, res) => {
        const userData = req.body;
        const usersJSON = fs.readFileSync(path.join(__dirname, "../data/usersDB.json"), "utf-8");
        const usuarios = JSON.parse(usersJSON);

        const usuarioLogueado = usuarios.find(thisUser => thisUser.mail === userData.mail);
        if (usuarioLogueado) {
            let contraseñaCorrecta = bcryptjs.compareSync(userData.password, usuarioLogueado.password);
            if (contraseñaCorrecta) {
                res.redirect("/usuarios/login");
            } else {
                res.redirect("/usuarios/register")
            }
        }
}
  }

module.exports = usuariosController;