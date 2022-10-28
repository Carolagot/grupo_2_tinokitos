const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const administradorController = require("../controllers/administradorController");
const { body }= require("express-validator");
const admMiddleware = require('../middlewares/admMiddleware')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/imagenes/fotosProductos'));
    },
    filename: function (req, file, cb) {
        let fotoNew = Date.now() + '-' + file.originalname;
        cb(null, fotoNew);
    }
});
const upload = multer({ storage: storage });


//validaciones de Creacion de producto
const validateProductDetailForm = [
    body("nombre").notEmpty().withMessage("Debés completar el nombre del producto").bail(),
    body("categoria").notEmpty().withMessage("Debés completar la categoría").bail(),
    body("descripcion").notEmpty().withMessage("Debés completar su descripción").bail(),
    body("fotoProducto").notEmpty().withMessage("Debés cargar una foto").bail(),
    body("precioProducto").notEmpty().withMessage("Debés completar el precio").bail(),
    body("stockProducto").notEmpty().withMessage("Debés cargar tu foto").bail(),
    body("condicion").notEmpty().withMessage("Debés elegir si es general o Destacado").bail(),

]


router.get("/editProduct/:id", admMiddleware,administradorController.editProduct);
router.put("/editProduct/:id",admMiddleware,upload.single("fotoProducto"), administradorController.editProductPut);
router.get("/createProduct", admMiddleware, administradorController.createProduct);
router.post("/createProduct",admMiddleware, validateProductDetailForm, upload.single("fotoProducto"), administradorController.createProductPost);
router.post("/eliminarProductoDelete/:id", admMiddleware, administradorController.eliminarProductoDelete);
router.get("/productListAdministrador",admMiddleware, administradorController.productListAdministrador);


module.exports = router;