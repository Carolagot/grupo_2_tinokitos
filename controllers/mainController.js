const express = require("express");

const mainController = {
    home: function (req, res) {
        res.render('index');
    },
 filosofia: function (req, res) {
    res.render('filosofia');
},    
contactanos: function (req, res) {
    res.render('contactanos');
},
headerAdministrador:function (req, res) {
    const usuariosJson = fs.readFileSync(path.join(__dirname, '../data/userBD.json'), 'utf-8');
    const usuarios = JSON.parse(usuariosJson);
    res.render("header", { usuario: usuarioPedido });
}
};

module.exports = mainController;
