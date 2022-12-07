const express = require("express");
const fs = require("fs");
const path = require("path");

const mainController = {
    home: function (req, res) {
        const userEmail = req.cookies.email;
        console.log(userEmail);
        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find(usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render("index", { usuarioLogueado: req.session.usuarioLogueado }
                )
            } else {
                res.render("index", { usuarioLogueado: req.session.usuarioLogueado }
                )
            }
        } else {
            res.render("index", { usuarioLogueado: req.session.usuarioLogueado }
            )
        }
    },
    filosofia: function (req, res) {
        const userEmail = req.cookies.email;
        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find(usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render("filosofia", { usuarioLogueado: req.session.usuarioLogueado }
                )
            } else {
                res.render("filosofia", { usuarioLogueado: req.session.usuarioLogueado }
                )
            }
        } else {
            res.render("filosofia", { usuarioLogueado: req.session.usuarioLogueado }
            )
        }
    },
    contactanos: function (req, res) {
        const userEmail = req.cookies.email;
        if (userEmail) {
            const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
            const usuarios = JSON.parse(usuariosJson);
            const user = usuarios.find(usuarioActual => usuarioActual.email == userEmail)
            if (user) {
                res.render("contactanos", { usuarioLogueado: req.session.usuarioLogueado }
                )
            } else {
                res.render("contactanos", { usuarioLogueado: req.session.usuarioLogueado }
                )
            }
        } else {
            res.render("contactanos", { usuarioLogueado: req.session.usuarioLogueado }
            )
        }
    },
};

module.exports = mainController;
