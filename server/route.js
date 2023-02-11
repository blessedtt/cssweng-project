const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//view controller
const view = require('./modules/viewController');

//user authentication modules
const { isPublic, isPrivate } = require('./modules/uauth/userAuth');
const { regValidation, loginValidation} = require('./modules/userValidation');
const { registerUser, loginUser } = require('./modules/userController');

const Add = require("./modules/addProduct");
app.get('/add-product', Add.postAddProduct);

//routes
app.get('/', isPublic, view.getLogin);
app.post('/login', isPublic, loginValidation, loginUser);

module.exports = app;