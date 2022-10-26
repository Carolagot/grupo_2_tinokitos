function guestMiddleware(req, res, next) {
    next ();
    if (req.cookie.usuarioLogueado == undefined) { 
} else {
    res.send ("Esta pagina es solo para Invitados!")
}
 
 }
module.exports = guestMiddleware;