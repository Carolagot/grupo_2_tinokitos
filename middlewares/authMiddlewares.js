function authMiddleware(req, res, next) {
    next ();
    if (req.cookie.usuarioLogueado != undefined) { 
} else {
    res.send ("Esta pagina es solo para Usuarios!")
}
 
 }
module.exports = authMiddleware;