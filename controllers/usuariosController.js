const express = require("express");
const fs = require("fs");
const path = require("path");

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
        const nuevoUsuario = {
            id: Date.now(),
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            email: req.body.email,
            contraseña: req.body.contraseña,
        };
        usuarios.push(nuevoUsuario);
        const usuariosActualizadosJSON = JSON.stringify(usuarios);
        fs.writeFileSync(path.join(__dirname, '../data/userBD.json'), usuariosActualizadosJSON, 'utf8');
        res.send('Usted ha sido registrado exitosamente!!');
    },
}

module.exports = usuariosController;