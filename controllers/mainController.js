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
        const userEmail = req.cookies.email;
        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find (usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render ("filosofia", {usuario: user})
            } else {
                res.render ("filosofia", {usuario: {tipo:"usuario"}})
            }
        }else {
            res.render ("filosofia", {usuario: {tipo:"usuario"}})
        }
        res.render('filosofia');
    },
    contactanos: function (req, res) {
        const userEmail = req.cookies.email;
        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find (usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render ("contactanos", {usuario: user})
            } else {
                res.render ("contactanos", {usuario: {tipo:"usuario"}})
            }
        }else {
            res.render ("contactanos", {usuario: {tipo:"usuario"}})
        }
        res.render('contactanos');
    },
};

module.exports = mainController;
