	const express = require("express");

	const path = require("path")

	const app = express();

    const routeAdministrador= require ("./routes/routeAdministrador");
    const routeMain= require ("./routes/routeMain");
    const routeUsuario= require ("./routes/routeUsuario");
    const routeProductos= require ("./routes/routeProductos");

	const publicPath = path.resolve(__dirname, './public')
    app.use(express.static (publicPath));

    app.set("view engine","ejs");
    app.set("views",path.join(__dirname,"./views"));

	app.listen(3100, () => {
    console.log ("Servidor corriendo en el puerto 3100")
});

	app.use("/", routeMain);
    app.use("/usuarios", routeUsuario);
    app.use("/productos", routeProductos);






