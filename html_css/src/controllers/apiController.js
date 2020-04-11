const db = require('../database/models');
const sequelize = db.sequelize;
 
/* Aca, adentro de las llaves va lo que hace el controlador */
const controller = {

/* aca definimos lo q hace el metodo USERS que pusimos en el Router */
    users:(req, res) => {
        /* Busca todos los usuarios en la base de datos */
     db.Users
       .findAll(
        
           {
               order: [
                ['id', 'DESC']
               ],
               attributes: ['first_name', 'last_name', 'email']
           }
       )
       .then(users => {
           /* En el resultado tambien le ponemos la URL de donde sacamos los datos y cuantos hay */
           let result = {  
               metadata: {
                   url: req.originalUrl,
                   quantity: users.length
               },
               /* Aca le decimos que nos traiga los datos encontrados */
               data: users
           }
           /* llamamos a result en el send, para que nos muestre los datos y lo q esta en metadata */
           return res.send(result);
       })
       .catch(error => console.log(error)); 
},
productos:(req, res) => {
    /* sumo todos los precios */
    let totalAmount = db.Products
       .sum('price');
       
    /* Busco todos los productos */
    let allProducts = db.Products
       .findAll(
        {
            order: [ ['id', 'DESC']],
            attributes: ['id','name', 'price', 'model', 'description', 'image'],
        }
       );
   
       /* aca escribo que queries deben terminar de ejecutarse para que haga el 'then' */
       Promise.all([totalAmount, allProducts])
       
       /* pongo 2 parametros, uno para el AMOUNT q encontro, otro para los PRODUCTOS */
       .then (function ([amount, products]){
        
        /* aca ya defino el resultado que va a mostrar la API */
        let result = {  
            metadata: {
                url: req.originalUrl,
                quantity: products.length, 
                amount: amount                            
            },
            data: products
        }
           return res.send(result);
       })
       .catch(error => console.log(error)); 
    },
    userId: (req, res) => {
            
        /* let userLogged = req.session.user */
        
        db.Users
            .findByPk(req.params.id)
            .then(function(user){
                if (user != null){
                    res.send(user);
                } else {
                    res.send("No existe ese usuario")
                }
            })
            .catch(error => res.send(error)); 
    },
    productosId: (req, res) => {
            
        /* let userLogged = req.session.user */
        
        db.Products
            .findByPk(req.params.id)
            .then(function(producto){
                if (producto != null){
                    res.send(producto);
                } else{
                    res.send("No existe ese producto")
                }
            })
            .catch(error => res.send(error)); 
    }



}


module.exports = controller