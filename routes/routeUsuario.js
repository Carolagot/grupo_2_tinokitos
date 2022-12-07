const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const usuariosController = require("../controllers/usuariosController");
const { body } = require("express-validator");
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/imagenes/fotosUsuarios'));
    },
    filename: function (req, file, cb) {
        let fotoNew = Date.now() + '-' + file.originalname;

        cb(null, fotoNew);
    }
});
const upload = multer({ storage: storage });

//validaciones de Registro de usuario
const validateUserForm = [
    body("nombre").notEmpty().withMessage("Debés completar tu nombre y apellido"),
    body("email").notEmpty().withMessage("Debés completar tu email"),
    body("telefono").notEmpty().withMessage("Debés completar tu teléfono"),
    body("password").notEmpty().isLength ({min:5}).withMessage("Debés completar tu contraseña"),
    body("confirmarPassword").notEmpty().isLength ({min:5}).withMessage("Debés confirmar la contraseña"),
    body("fotosUsuarios").notEmpty().withMessage("Debés cargar tu foto")

]

router.get("/login", userLoggedMiddleware, usuariosController.login);
router.get("/register", userLoggedMiddleware, usuariosController.register);
router.post("/register", userLoggedMiddleware, validateUserForm, upload.single("fotosUsuarios"), usuariosController.postRegister);
router.post("/login", userLoggedMiddleware, usuariosController.loginProcess);
router.get('/logout', usuariosController.logout)

module.exports = router;