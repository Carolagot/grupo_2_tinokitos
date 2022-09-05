const express= require("express");
const router= express.Router();
const administradorController= require("../controllers/administradorController");

router.get("/administrador", administradorController.agregarProducto);
router.get("/administrador", administradorController.eliminarProducto);
router.get("/administrador", administradorController.editarProducto);
router.get("/administrador", administradorController.productoDestacado);

module.exports= router;