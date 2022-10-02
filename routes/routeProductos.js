const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productosController = require("../controllers/productosController");

router.get("/productDetail/:id", productosController.productDetail);
router.get("/productCart", productosController.productCart);
router.get("/productList",productosController.productList);
router.get("/productHoraDeComer", productosController.productHoraDeComer);

module.exports = router;