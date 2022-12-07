function authMiddleware(req, res, next) {
    let usuarioLogueado = req.session.usuarioLogueado 
    if (usuarioLogueado != undefined && usuarioLogueado.tipo ==="usuario") {
        next()
    } else {
        res.render("soloUsuarios")
    };
   
}
module.exports = authMiddleware;