const express= require("express");
const router= express.Router();
const administradorController= require("../controllers/administradorController");

router.get("/editProduct", administradorController.editProduct);
router.get("/createProduct", administradorController.createProduct);
router.get("/eliminarProducto", administradorController.eliminarProducto);
router.get("/productoDestacado", administradorController.productoDestacado);


module.exports= router;