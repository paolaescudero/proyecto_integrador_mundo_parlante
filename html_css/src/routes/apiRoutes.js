const express = require('express');
const router = express.Router();

/* definimos el controlador que vamos a usar */
const apiController = require('../controllers/apiController');
/* Aca ponemos lo que va a hacer el router */

/* aca accede a el JSON de los users */
router.get('/users', apiController.users);
/* aca accede a el JSON de los users x ID */
router.get('/users/:id', apiController.userId);

/* aca accede a el JSON de los productos */
router.get('/productos', apiController.productos);
/* aca accede a el JSON de los productos */
router.get('/productos/:id', apiController.productosId);


module.exports = router;