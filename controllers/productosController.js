const express= require("express");

const productosController= {
    productCart:function (req,res){
        res.render("productCart");
},
    productDetail:function (req,res){
        res.render("productDetail");
}
    
    }
    module.exports= productosController;