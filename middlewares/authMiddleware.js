function authMiddleware(req, res, next) {
    if (req.session.usuarioLogueado!==undefined) {
    } else {
        res.send("Esta pagina es solo para Usuarios!")
    }
    next();
}
module.exports = authMiddleware;