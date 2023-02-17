const express = require('express');
const router = express.Router();

//subroutes
const productRoute = require('./productRoute');
const categoryRoute = require('./categoryRoute')

//error handler
const apiErrorHandler = require('../middleware/errorhandling/apiErrorHandler');


//TODO: When connecting to the frontend, ensure that the fields sent follow the parameter names
/********************
 *     CATEGORY 
 ********************/
router.use('/category', categoryRoute);

/****************
 * 	PRODUCTS
 ****************/
router.use('/product', productRoute);

router.use(apiErrorHandler);

module.exports = router;