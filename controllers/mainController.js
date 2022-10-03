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
} 
};

module.exports = mainController;
