const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const usuariosController = require("../controllers/usuariosController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/imagenes/fotosUsuarios'));
    },
    filename: function (req, file, cb) {
        let fotoNew =  Date.now() + '-' + file.originalname;

        cb(null, fotoNew);
    }
});
const upload = multer({ storage: storage });


router.get("/login", usuariosController.login);
router.get("/register", usuariosController.register);
router.post("/register", upload.single("fotosUsuarios"), usuariosController.postRegister);

module.exports = router;