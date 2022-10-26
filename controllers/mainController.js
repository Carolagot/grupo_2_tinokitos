const express = require("express");
const fs = require("fs");
const path = require("path");

const mainController = {
    home: function (req, res) {
        const userEmail = req.cookies.email;
        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find (usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render ("index", {usuario: user})
            } else {
                res.render ("index", {usuario: {tipo:"usuario"}})
            }
        }else {
            res.render ("index", {usuario: {tipo:"usuario"}})
        }
        res.render('index');
    },
    filosofia: function (req, res) {
        res.render('filosofia');
    },
    contactanos: function (req, res) {
        const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
        const usuarios = JSON.parse(usuariosJson);
        const usuarioLogueado = req.cookies("email");

        const usuarioCookie = usuarios.find(usuarioActual => usuarioActual.email == usuarioLogueado);
        console.log(usuarioCookie)
        res.render('contactanos');
    },
};

module.exports = mainController;
