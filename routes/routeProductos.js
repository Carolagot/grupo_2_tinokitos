const express= require("express");
const router= express.Router();
const multer= require ("multer");
const path = require ("path");
const productosController= require("../controllers/productosController");

router.get("/productDetail", productosController.productDetail);
router.get("/productCart", productosController.productCart);

module.exports= router;