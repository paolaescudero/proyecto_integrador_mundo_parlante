const prevPageMiddleware = (req, res, next) => {
   
    console.log("-------------------PASE POR EL MIDDLE PREVIOUS PAGE----------------------");
    
if(res.locals.isAuthenticated == false){

    if (!req.session.previousPage){
        /* creamos el array vacio para guardar los productos */
        req.session.previousPage = [];
    
        }
        
        if(req.originalUrl == '/productos/js/popper.js'){
            req.session.previousPage = req.session.previousPage
        } else if (req.originalUrl == '/productos/js/bootstrap.min.js'){
            req.session.previousPage = req.session.previousPage
        } else if (req.originalUrl == '/productos/js/bootstrap.min.js.map'){
            req.session.previousPage = req.session.previousPage
        }else if (req.originalUrl == '/users/js/bootstrap.min.js'){
            req.session.previousPage = req.session.previousPage
        }else if (req.originalUrl == '/users/js/bootstrap.min.js.map'){
            req.session.previousPage = req.session.previousPage
        } else if (req.originalUrl == '/productos/js/jquery.js'){
            req.session.previousPage = req.session.previousPage
        } else if (req.originalUrl == '/productos/js/jquery.js.map'){
            req.session.previousPage = req.session.previousPage
        } else if (req.originalUrl == '/users/js/jquery.js'){
            req.session.previousPage = req.session.previousPage
        } else if (req.originalUrl == '/users/js/jquery.js.map'){
            req.session.previousPage = req.session.previousPage
        } else if (req.originalUrl == '/users/js/popper.js'){
            req.session.previousPage = req.session.previousPage
        } else if (req.originalUrl == '/js/jquery.js'){
            req.session.previousPage = req.session.previousPage
        } else if (req.originalUrl == '/js/jquery.js.map'){
            req.session.previousPage = req.session.previousPage
        } else if (req.originalUrl == '/js/popper.min.js.map'){
            req.session.previousPage = req.session.previousPage
        } else if (req.originalUrl == '/js/bootstrap.min.js.map'){
            req.session.previousPage = req.session.previousPage
        } else {
            req.session.previousPage.push(req.originalUrl)
           
        }
        
        res.locals.previousPage = req.session.previousPage
        console.log("-------------------previousPage en LOCALS!----------------------");
        console.log(req.session.previousPage);
}
    next();
}

module.exports = prevPageMiddleware;