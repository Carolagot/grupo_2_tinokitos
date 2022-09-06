const express= require("express");

const productosController= {
    productCart:function (req,res){
        res.render("productCart");
},
    productDetail:function (req,res){
        res.render("productDetail");
},
    editProduct:function (req,res){
    res.render("editProduct");
},
    createProduct:function (req,res){
    res.render("createProduct");
},
    
    }
    module.exports= productosController;