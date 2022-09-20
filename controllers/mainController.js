const express = require("express");

const mainController = {
    home: function (req, res) {
        res.render('index');
    },
};

module.exports = mainController;
