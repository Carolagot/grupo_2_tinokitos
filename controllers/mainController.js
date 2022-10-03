const express = require("express");

const mainController = {
    home: function (req, res) {
        res.render('index');
    },
 filosofia: function (req, res) {
    res.render('filosofia');
},    
};

module.exports = mainController;
