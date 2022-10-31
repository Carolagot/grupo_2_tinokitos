function authMiddleware(req, res, next) {
    let usuarioLogueado = req.session.usuarioLogueado 
    if (usuarioLogueado != undefined && usuarioLogueado.tipo ==="usuario") {
    } else {
        res.render("soloUsuarios")
    };
    next();
}
module.exports = authMiddleware;