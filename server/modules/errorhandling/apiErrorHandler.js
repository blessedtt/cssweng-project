const ErrorAPI = require('./ErrorAPI');

function apiErrorHandler(err, req, res, next){

    if (err instanceof ErrorAPI){
        res.status(err.code).json(err.message);
        return;
    }

    //general error message
    res.status(500).json("something went wrong.");
}

module.exports = apiErrorHandler;