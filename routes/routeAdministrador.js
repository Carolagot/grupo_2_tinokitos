const express= require("express");
const router= express.Router();
const administradorController= require("../controllers/administradorController");

router.get("/editProduct", administradorController.editProduct);
router.get("/createProduct", administradorController.createProduct);
router.delete("/eliminarProducto/:id", administradorController.eliminarProductoDelete);
router.get("/productoDestacado", administradorController.productoDestacado);
router.get("/productosDetail:id", administradorController.productosDetail)

module.exports= router;