// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer2 = require('multer');
const path = require('path');


//para guardar los datos en productos.json***
const storageDiskProducts = multer2.diskStorage({
	destination: (req, file, cb) => {
		cb(null, __dirname + '/../../public/images/productos');
	},
	filename: (req, file, cb) => {
		let imageFinalName = `product_avatar_${Date.now()}${path.extname(file.originalname)}`;
		cb(null, imageFinalName);
	}
});

//no cambiar lo que dice {storage:} - lo demas se puede cambiar todo
const upload2 = multer2({ storage: storageDiskProducts });


// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// ************ RUTAS ************

/* GET - home page. */
router.get('/', mainController.root);

/* GET - productos. */
router.get('/productos', mainController.productos);

/* POST - productos. */
router.post('/productos', mainController.filter);




/* • • • • • • •  CREAR PRODUCTO • • • • • • •  */

/* GET - productos. */
router.get('/productosAdd', mainController.create);

/* POST - productos */
router.post('/productosAdd', upload2.single('image'), mainController.store);


/* >>>>>>>>>>>>>>>>> DETALLE PRODUCTO <<<<<<<<<<<<<<<<<<<<< */
router.get('/productos/detalle/:id', mainController.detalle);

/* Comentar producto */
router.post('/comentar', mainController.crearComentario);

/* Borrar comentario */
router.post('/borrarcomentario', mainController.borrarComentario);


/* • • • • • • EDITAR PRODUCTO • • • • • • */
router.get('/productos/editar/:id', mainController.edit);
router.post('/productos/editar/:id', upload2.single('image'), mainController.update);

/* >>>>>>>>>>>>>>>>> BORRAR PRODUCTO <<<<<<<<<<<<<<<<<<<<< */
router.post ('/borrar/:id', mainController.borrar);


/* >>>>>>>>>>>>>>>>> CARRITO <<<<<<<<<<<<<<<<<<<<< */
/* GET - carrito. */
router.get('/carrito', mainController.carrito);
/* POST - carrito. */
router.post('/carrito', mainController.addToCart);

router.post('/addToCartGuest', mainController.addToCartGuest);

/* POST - Borrar carrito. */
router.post('/pepinito', mainController.borrarCart);

/* GET - contacto. */
router.get('/contacto', mainController.contacto);

/* POST - contacto. */
router.post('/contacto', mainController.mensajeEnviado);

/* GET - Quienes Somos. */
router.get('/quienes-somos', mainController.about);



module.exports = router;
