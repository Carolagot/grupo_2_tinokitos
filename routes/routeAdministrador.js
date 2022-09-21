const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const administradorController = require("../controllers/administradorController");

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

router.get("/editProduct", administradorController.editProduct);
router.put("/editProduct", administradorController.editProductPut);
router.get("/createProduct", administradorController.createProduct);
router.post("/createProduct", upload.single("fotoProducto"), administradorController.createProductPost);
router.delete("/eliminarProducto/:id", administradorController.eliminarProductoDelete);

module.exports = router;