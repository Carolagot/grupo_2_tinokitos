function admMiddleware(req, res, next) {
    if (req.cookies.email = "ngonzalez@gmail.com") {
    } else {
        res.send("Esta pagina es solo para el Administrador!")
    };
    next();
}
module.exports = admMiddleware;