const fs = require('fs');
const bcrypt = require('bcrypt');
const db = require('../database/models');
const sequelize = db.sequelize;
let { check, validationResult, body } = require('express-validator');

// Constants
const userFilePath = __dirname + '/../data/users.json';


const controller = {
	registerForm: (req, res) => {
		
			res.render('register');
			
			
	},
	store: (req, res) => {
		let errors = (validationResult(req));
			console.log(errors);
			
		if (errors.isEmpty()) {


				const userData = {
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					email: req.body.email,
					password: req.body.password,				
					avatar: req.file.filename,
				}
				console.log(" - - - - - - - - - user data - - - - - - - - - - - - -")
				console.log(userData)

				db.Users.findOne({
					where: {
						email: req.body.email
					}
				})
				//aca convierto la contraseña en cifrado
				.then(users => {
					
					/* si no me encuentra al usuario */
					if (!users) {
						bcrypt.hash(req.body.password, 10, (err, hash) => {
							userData.password = hash
						db.Users
						.create(userData)
						.then(users => {
							
							res.render('login');
						})
						.catch(error => console.log(error));
						})
					}else{
						res.render('register', {users})
					}
				})
		
	} else {
			res.render('register', {errors: errors.errors})
		}
	},
	loginForm:(req, res) => {
			res.render('login');
		
	},
	processLogin: (req, res) => {
	
		db.Users
			.findAll({
				where: {
				  email: req.body.email,
				}
			}) 
			.then(function(user){
								
				if (user[0] != undefined) {
					
					// Al ya tener al usuario, comparamos las contraseñas
					if (bcrypt.compareSync(req.body.password, user[0].password)) {
						delete user[0].password;
						//guarda al usuario en sesion
						req.session.user = user[0];
						console.log("<<<<<<<<<<<<<---- req.session -------------->>>>>>");
						console.log(req.session);
						// Setear la cookie
						if (req.body.remember_user) {
							res.cookie('userIdCookie', user[0].id, { maxAge: 60000 * 60 });
						}		
						
						//si el mdw previous tiene product, lo suma al carrito
						if (req.session.cart.length > 0){

							// Redireccionamos al carrito para q vea su producto
							res.redirect('/carrito'); 	
							
						} else{

							let lastUrl = res.locals.previousPage.length - 3;

							let strUrl = res.locals.previousPage[lastUrl]

								if (strUrl == '/users/register') {
									res.redirect("/users/profile/"+user[0].id);
								} else if (strUrl == '/users/login') {
									res.redirect("/users/profile/"+user[0].id);
								} 
							// Redireccionamos al visitante a su perfil
							res.redirect("http://mundoparlante.herokuapp.com"+strUrl); 	
						}
						
					} else {
						res.render('credenciales-invalidas');
					}
				} else {
					res.render('nouser', {email: req.body.email}	);
				} 
            })                 
	},

	profile: (req, res) => {
		
		db.Users
			.findByPk(req.params.id)
        	.then(function(user){
				if(!user){
					res.render('noprofile')
				}else{
				res.render('profile', {user: user})
				}
			})
			.catch(error => console.log(error));
	},
	edit: function(req, res){
        db.Users.findByPk(req.params.id)
		
		    .then(function(user){
				
                res.render('editarUser', {user:user});
            })  
	},
	update: function(req,res){
	
console.log("req.body.avatar");
	
		    db.Users.update({
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				password: req.body.password,
				/*  avatar: req.file.filename,  */
        },{
            where: {
                id: req.session.user.id
            }
        }).then(userUpdated => {
						
			res.redirect('/users/profile/'+req.params.id)
		})
		.catch(error => console.log(error));
	},
	 editarAvatar:function(req,res){
		db.Users.findByPk(req.params.id)
		
		    .then(function(user){
				
                res.render('editarAvatar',{user:user});
            })
	} , 
	updateAvatar:function(req,res){
		db.Users.update({
			
			avatar: req.file.filename
	},{
		where: {
			id: req.session.user.id
		}
	}).then(userUpdated => {
					
		res.redirect('/users/profile/'+req.params.id)
	})
	.catch(error => console.log(error));
	} , 
    logout: (req, res) => {
		// Destruir la session
		req.session.destroy();
		// Destruir la cookie
		res.cookie('userIdCookie', null, { maxAge: 1 });
		return res.redirect('/');
	},
	show:(req, res) => {
		db.Users
			.findAll(
				{
					order: [
					['id', 'DESC']
					]
				}
			)
			.then(users => {
				return res.render('listado', { users });
			})
			.catch(error => console.log(error));
	},
	showTabla:(req, res) => {
		db.Users
			.findAll(
				{
					order: [
					['id', 'DESC']
					]
				}
			)
			.then(users => {
				return res.render('listado-tabla', { users });
			})
			.catch(error => console.log(error));
	},
	borrarUser: function(req,res){
		console.log("' ' ' ' ' ' ' ' ' 'REQ.BODY '' ' '' ' ' ' '' ' ' ");
		
		console.log(req.body.userid);
		
		
        db.Users.destroy({
            where:{
                id: req.body.userid
            }
        })
        res.redirect('/users/listado')
    },
	changeRole: function(req,res){
        db.Users.update({ 
			/* first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: req.body.password, */
			/* avatar: req.file.filename */
			role: req.body.role
        },{
            where:{
                id: req.body.userid
            }
        }).then(userUpdated => {
			
			res.redirect('/users/listado')
		}) 
       
    }
}

module.exports = controller
