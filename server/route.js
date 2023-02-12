const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const { addCategory, removeCategory, getCategories } = require('./modules/category');
const { addProduct, removeProduct, getProducts } = require('./modules/product');
const { getFilteredProducts } = require('./modules/filterProduct')


//user authentication modules
const { isPublic, isPrivate } = require('./modules/uauth/userAuth');
const { regValidation, loginValidation} = require('./modules/uauth/userValidation');
const { registerUser, loginUser } = require('./modules/uauth/userController');

//TODO: When connecting to the frontend, ensure that the fields sent follow the req.body parameter names


/********************
 *     CATEGORY 
 ********************/

//get categories as array
app.use('/get/category', async (req, res, next) =>{
	categories = await getCategories()
	console.log(categories);
	//TODO: send array data to view
	res.send(categories);
	next();
})

//add category render
app.get('/add/category', (req,res) =>{
	res.render('addcategorytest.html');
})

//remove category render
app.get('/remove/category', (req, res) =>{
	res.render('removecategorytest.html');
});

/** req.body parameters:
 *      name - name of category
*/
app.post('/add/category/submit', addCategory);

/** req.body parameters:
 *      name - name of category
*/
app.post('/remove/category/submit', removeCategory);


/****************
 * 	PRODUCTS
 ****************/

//add product render
app.get('/add/product', (req,res) =>{
	res.render('addproducttest.html');
})

/** req.body parameters: 
 * 		pname - product name
 *      category - category ID of product
 *      desc - description of product
 *      brand - brand of product
 *      price - price of product
*/
app.post('/add/product/submit', addProduct)

//remove product render
app.get('/remove/product', (req, res) =>{
	res.render('removeproducttest.html');
})

app.post('/remove/product/submit', removeProduct)

/** req.body parameters:
 * 		id - product ID to remove
 */
app.post('/remove/product/submit', getProducts);

//get products as array
app.use('/get/product', async (req, res, next) =>{
	products = await getProducts()
	console.log(products);
	//TODO: send array data to view
	res.send(products);
	next();
});

/************** 
 * 	 FILTERS
 **************/
//TODO this might not be final version, but this is my current implementation

app.use('/get/product/filter', async (req, res) =>{
	products = await getFilteredProducts();
	console.log(products);
	//TODO: send filtered products to view
	res.send(products);
	next();
})

module.exports = app;