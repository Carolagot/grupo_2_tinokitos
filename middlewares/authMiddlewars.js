function authMiddleware(req, res, next) {
    next ();
    if (req.session.usuarioLogueado != undefined) { 
} else {
    res.send ("Esta pagina es solo para Usuarios!")
}
 
 }
module.exports = authMiddleware;