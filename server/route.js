const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {addCategory, removeCategory} = require('./modules/category');

//user authentication modules
const { isPublic, isPrivate } = require('./modules/uauth/userAuth');
const { regValidation, loginValidation} = require('./modules/userValidation');
const { registerUser, loginUser } = require('./modules/userController');

//view controller
const view = require('./modules/viewController');

//TODO: When connecting to frontend, ensure that the fields follow the req.body parameter names


//add category render
app.get('/add/category', (req,res) =>{
    res.render('addcategorytest.html');
})

/** req.body parameters:
 *      name - name of product
*/
app.post('/add/category/submit', addCategory);

//remove category render
app.get('/remove/category', (req, res) =>{
    res.render('removecategorytest.html');
});

/** req.body parameters:
 *      name - name of product
*/
app.post('/remove/category/submit', removeCategory)

module.exports = app;