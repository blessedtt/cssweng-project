//exclusively used for login page
//checks if the user is already authenticated if they explicitly go to login page

const jwt = require('./jwt')
const createError = require('http-errors')
const auth = async (req, res, next) => {
    if (req.headers.authorization) {
        res.redirect('/');  //redirect to index page
    } else{
        next();
    }
}
module.exports = auth;