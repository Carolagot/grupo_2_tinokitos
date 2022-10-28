	const express = require("express");
    const app = express();
	const path = require("path");
    const cookieParser = require ("cookie-parser");
    const session = require('express-session');

    const publicPath = path.resolve(__dirname, './public')
    app.use(express.static (publicPath));
    
    const methodOverride = require ("method-override");

    const routeAdministrador= require ("./routes/routeAdministrador"); //vinculo las rutas y las requiero para q se ejecuten
    const routeMain= require ("./routes/routeMain");
    const routeUsuario= require ("./routes/routeUsuario");
    const routeProductos= require ("./routes/routeProductos");


    app.set("view engine","ejs");
    app.set("views",path.join(__dirname,"./views"));



	app.listen(3100, () => {
    console.log ("Servidor corriendo en el puerto 3100")
});

    app.use (express.urlencoded({extended:true}));
    app.use (express.json());
    app.use  (methodOverride ("_method"));
    app.use  (cookieParser());
    app.use(session({secret: "Secreto",
     resave: false,
	saveUninitialized: false,}));

	app.use("/", routeMain);//sirve para ir mas directo a las rutas y no tener que usar dentro de routes la palabra route.
    app.use("/usuarios", routeUsuario);
    app.use("/productos", routeProductos);
    app.use ("/administrador", routeAdministrador);
    app.use ((req,res,next) => {
        res.status(404).render("error404");
        next();
    });








