function authMiddleware(req, res, next) {
    if (req.cookies.email != undefined) {
    } else {
        res.send("Esta pagina es solo para Usuarios!")
    }
    next();
}
module.exports = authMiddleware;