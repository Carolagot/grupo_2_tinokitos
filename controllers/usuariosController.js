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
            telefono: req.body.telefono,
            email: req.body.email,
            password: constraseñaHasheada, 
            categoria: req.body.categoria,
            fotosUsuarios: '/imagenes/fotosUsuarios/' + req.file.filename
        };
        usuarios.push(nuevoUsuario);
        const usuariosActualizadosJSON = JSON.stringify(usuarios);
        fs.writeFileSync(path.join(__dirname, '../data/userBD.json'), usuariosActualizadosJSON, 'utf8');
        res.redirect("/index");
    },

    
}

module.exports = usuariosController;