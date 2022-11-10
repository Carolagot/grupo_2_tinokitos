const express = require("express");
const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const {validationResult} = require ('express-validator');

const usuariosController = {
    login: function (req, res) {
        res.render("login", {usuarioLogueado: req.session.usuarioLogueado}
        );
    },
    register: function (req, res) {
        res.render("register", {usuarioLogueado: req.session.usuarioLogueado}
        );
    },
    postRegister: function (req, res) {
        console.log(req.body);
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
       
        const errors = validationResult (req);
        if (!errors.isEmpty() ) {
            res.render("register", {usuarioLogueado: req.session.usuarioLogueado, mensajesDeError: errors.mapped(), old: req.body});
        } else {
        usuarios.push(nuevoUsuario);
        const usuariosActualizadosJSON = JSON.stringify(usuarios);
        fs.writeFileSync(path.join(__dirname, '../data/userBD.json'), usuariosActualizadosJSON, 'utf8');
        res.redirect("/usuarios/login");
    }},

    loginProcess: (req, res) => {
        const userData = req.body; //guarda los datos ingresados en el formulario de login
        const usersJSON = fs.readFileSync(path.join(__dirname, "../data/userBD.json"), "utf-8"); //buscamos usuario en la base de datos
        const usuarios = JSON.parse(usersJSON);
        const usuarioLogueado = usuarios.find(thisUser => thisUser.email === userData.email); //busca el usuario con el email ingresado
        if (usuarioLogueado) { // si se encontro el usuario con ese email..

            let contraseñaCorrecta = bcryptjs.compareSync(userData.password, usuarioLogueado.password);
            // let contraseñaCorrecta = userData.password == usuarioLogueado.password  //chequeamos si la contraseña es correcta
            if (contraseñaCorrecta) {// si es correcta...
                if(req.body.recordarMail) {
                    res.cookie('userEmail', req.body.email, {maxAge: (1000000000 * 60) * 2 });  //res.clearCookie("email");
                }
                req.session.usuarioLogueado = usuarioLogueado;
                res.redirect("/"); //redireccionamos al index
            } else {
                //si no es correcta
                res.render("/usuarios/login",{
                    errors: {
                        password:
                            { msg: "La contraseña no coincide con la registrada, por favor vuelva a ingresarla" }
                    },
                    oldData: req.body,
                    usuarioLogueado: req.session.usuarioLogueado,
                })
            }
        } else { // si no se encontro usuario con ese email
            res.redirect("/usuarios/register")
        }
    },
        logout: function (req, res) {
            res.clearCookie("userEmail");
            req.session.destroy();
            return res.redirect('/');
        }
    }

module.exports = usuariosController;