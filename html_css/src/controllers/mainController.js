const db = require('../database/models');
const sequelize = db.sequelize;
const moment = require('moment');


const controller = {
	root: (req, res) => {
		const isLogged = req.session.userId ? true : false;
	
		res.render('index', {isLogged});
	},
	productos:(req, res) => {
		let pedidoProduct = db.Products.findAll(

			/* para ordenar del mas nuevo al mas viejo */
			/* esto va adentro del findAll( "{aca va el order:[['columna', 'ORDEN']]}") */

			{
				order: [
				 ['id', 'DESC']
				]
			}
		);
		
		let pedidoBrand = db.Brands.findAll();
		
		   Promise.all([pedidoProduct, pedidoBrand])
		   	 .then(function([products, brands, brands_selected]){
				
				res.render('productos', {products:products, brands:brands, brands_selected:[] });
            }) 
		
		
			.catch(error => console.log(error)); 
	},

	filter:(req, res) => {
		 
		
		/* defino pedido product afuera para usarla 2 veces en el if */
		let pedidoProduct

			/* si el req.body.marca me manda algun ID hago un find all con where */
			if(req.body.marca != undefined){
				pedidoProduct = db.Products.findAll({
					where: {
		
						brand_id: req.body.marca
					}
				});
			/* si el req.body.marca me vuelve undefined, lo convierto en objeto y hago findAll() */
			/* para q me traiga TODOS los productos. */
			/* Hay que convertilo en objeto para que cuando pase por el .then */
			/* se mantenga el array q le pido que cree */
			}else{
				req.body.marca = []
				pedidoProduct = db.Products.findAll(
					{
						order: [
						['id', 'DESC']
						]
					}
				);
			}
		
		/* Ahora busco todas las marcas para traer los nombres */
		let pedidoBrand = db.Brands.findAll();
		
		/* promise.all para que espere hasta q todas las promesas se cumplan */
		Promise.all([pedidoProduct, pedidoBrand])

				/* defino un 3er parametro para saber q IDs estan seleccionados */
				.then(function([products, brands, brands_selected]){
					
				/* convierto los datos q vienen en el req.body.marca en array para poder iteralo en la vista */
				res.render('productos', {products:products, brands:brands, brands_selected:Array.from(req.body.marca)});
				
		}) 
	
		.catch(error => console.log(error)); 

	},
	create: (req, res) => {
		
		db.Brands
			.findAll()
			.then(brands => {
			const isLogged = req.session.user ? true : false;
				if (isLogged){
					return res.render('productosAdd', { brands});
						}
				 else {
					return res.render('login');
				}
			})

			.catch(error => console.log(error));
			
	},
	store: (req, res) => {
	
			db.Products
				.create({
					name: req.body.name,
					price: req.body.price,
					image: req.file.filename,
					brand_id: req.body.brand_id,
					model: req.body.model,
					description: req.body.description,
					user_id: req.session.user.id,				
				})
				.then(productSaved => {
					
					res.redirect('productos');
				})
				.catch(error => console.log(error)); 
	},
	edit: function(req, res){
        let pedidoProduct = db.Products.findByPk(req.params.id);
		
        let pedidoBrand = db.Brands.findAll();

		   Promise.all([pedidoProduct, pedidoBrand])
		   	 .then(function([product, brand]){
				
                res.render('editar', {product:product, brand:brand});
            })  
	},
	update: function(req,res){

		/* no se porque pero esta es la que anda aunq no me deja cambiar la imagen */
		let filename = '';
		if (req.body.image == undefined){
			filename = req.body.currentImage
			} else{
			filename = req.body.image
			}
        db.Products.update({
			name: req.body.name,
			price: req.body.price,
			image: filename,
			brand_id: req.body.brand_id,
			model: req.body.model,
			description: req.body.description,
			user_id: req.session.user.id,
        },{
            where: {
                id: req.params.id
            }
		})
		.then(productSaved => {
		
			res.redirect('/productos/detalle/'+req.params.id)
		})
		.catch(error => console.log(error));
        
    },

	carrito:(req, res) => {
				
		db.Products.findAll({
			where:{
				id: req.session.cart
			}
		})
		.then(products =>{

			res.render('carrito', {products});
			
		})
		.catch(error => console.log(error));
		
	},
	addToCart:(req, res) => {

		let cart = req.session.cart;

		if (!cart.includes(req.body.product)){

			req.session.cart.push(req.body.product);

		} else{

			res.render('productoEnCarrito');
		}
		console.log(req.session.cart);
		res.redirect('productos');
	},
	addToCartGuest:(req, res) => {

		let cart = req.session.cart;
			
			cart.push(req.body.product);
			console.log("--------- producto Add to cart Guest---------");
			console.log(cart);
			

			
			res.redirect('users/login');
		
	},
	borrarCart: function(req, res)  {
		let cart = req.session.cart

		//busca la posicion del elemento a borrar
		var pos = cart.indexOf(req.body.product_id)
		
		//borra desde la posicion encontrada 1 lugar
		cart.splice(pos,1);
		
		//vuelve a cargar el carrito
		res.redirect("carrito")
	},
	contacto:(req, res) => {
		
		res.render('contacto');
	},
	mensajeEnviado:(req, res) => {
		
		res.render('mensajeEnviado');
	},
	about:(req, res) => {
		
		res.render('quienes-somos',);
	},
	detalle: function (req,res){
		let pedidoProduct = db.Products
			.findByPk(req.params.id, {
            	include: [{association: "brand"}, {association: "user"}] 
		})
		let pedidoComment = db.Comments
			.findAll({
				include: [{association: "user"}] ,
				where:{
					product_id: req.params.id
				},
				order: [
				['id', 'DESC']
				]
				
			})
		Promise.all([pedidoProduct, pedidoComment])
        	.then(function([product, comment]){
				
                res.render('detalle', {product: product, comment:comment});
            })
	},
	crearComentario: (req, res) => {
	
		db.Comments
			.create({
				product_id: req.body.product_id,
				user_id: req.session.user.id,
				name: req.body.name,
				email: req.body.email,
				comment: req.body.comment								
			})
			.then(commentSaved => {
								
				res.redirect('productos/detalle/'+req.body.product_id);
			})
			.catch(error => console.log(error)); 
}, 
borrarComentario: function(req,res){
	
	db.Comments
	.destroy({
		where:{
			id: req.body.commentid
		}
	})
	res.redirect('/productos/detalle/'+req.body.commentproduct_id)
},
    borrar: function(req,res){
        db.Products.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect('/productos')
    }
}

module.exports = controller
