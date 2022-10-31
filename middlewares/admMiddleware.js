function admMiddleware(req, res, next) {
  let usuarioLogueado = req.session.usuarioLogueado 
    if (usuarioLogueado.tipo=="administrador") {
    } else {
        res.render("soloAdministrador")
    };
    next();
}
module.exports = admMiddleware;