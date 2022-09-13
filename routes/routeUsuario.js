const express= require("express");
const router= express.Router();
const path = require ("path");
const usuariosController= require("../controllers/usuariosController");

router.get("/login", usuariosController.login);
router.get("/register", usuariosController.register);

router.post("/register", usuariosController.postRegister);

module.exports= router;