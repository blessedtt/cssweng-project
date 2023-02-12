const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {addCategory, removeCategory, getCategories} = require('./modules/category');
const { addProduct, removeProduct, getProducts } = require('./modules/product');

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
	//res.send(categories);
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
app.post('/remove/category/submit', removeCategory)
module.exports = app;