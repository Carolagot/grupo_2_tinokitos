const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const usuariosController = require("../controllers/usuariosController");
const { body }= require("express-validator");

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

//validaciones de Registro de usuario
const validateUserForm = [
    body("nombre").notEmpty().withMessage("Debés completar tu nombre y apellido").bail(),
    body("email").notEmpty().isEmail().withMessage("Debés completar tu email").bail(),
    body("telefono").notEmpty().withMessage("Debés completar tu teléfono").bail(),
    body("password").notEmpty().isLength ({min:5}).withMessage("Debés completar tu contraseña").bail(),
    body("confirmarPassword").notEmpty().isLength ({min:5}).withMessage("Debés confirmar la contraseña").bail(),
    body("fotosUsuarios").notEmpty().withMessage("Debés cargar tu foto").bail(),

]


router.get("/login", usuariosController.login);
router.get("/register", usuariosController.register);
router.post("/register", upload.single("fotosUsuarios"), usuariosController.postRegister);
router.post("/login", usuariosController.loginProcess);

module.exports = router;