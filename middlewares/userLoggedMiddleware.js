function userLoggedMiddleware(req, res, next) {
    let usuarioLogueado = req.session.usuarioLogueado 
    if (usuarioLogueado == undefined) {
    } else {
        return res.redirect("/")
    };
    next();
}
module.exports = userLoggedMiddleware;

