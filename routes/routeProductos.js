const express = require("express");
const router = express.Router();
const path = require("path");
const productosController = require("../controllers/productosController");
const authMiddleware = require('../middlewares/authMiddleware')

router.get("/productDetail/:id", productosController.productDetail);
router.get("/productCart",authMiddleware, productosController.productCart);
router.get("/productList",productosController.productList);
router.get("/HoraDeComer", productosController.productHoraDeComer);
router.get("/HoraDePasear", productosController.productHoraDePasear);
router.get("/HoraDeDormir", productosController.productHoraDeDormir);
router.get("/HoraDeJugar", productosController.productHoraDeJugar);

module.exports = router;