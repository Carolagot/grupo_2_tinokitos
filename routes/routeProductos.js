const express= require("express");
const router= express.Router();
const productosController= require("../controllers/productosController");

router.get("/productDetail", productosController.productDetail);
router.get("/productCart", productosController.productCart);


module.exports= router;