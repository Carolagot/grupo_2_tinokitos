function guestMiddleware(req, res, next) {
    next ();
    if (req.session.usuarioLogueado == undefined) { 
} else {
    res.send ("Esta pagina es solo para Invitados!")
}
 
 }
module.exports = guestMiddleware;