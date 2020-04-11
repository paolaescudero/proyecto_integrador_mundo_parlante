const cartMiddleware  = (req, res, next) =>{

    if (!req.session.cart){
    /* creamos el array vacio para guardar los productos */
    req.session.cart = [];
    }
    /* le paso la cantidad de productos seleccionados a locals */
    res.locals.cartQty = req.session.cart.length;
    next();
}
module.exports = cartMiddleware;