class ErrorAPI{
    constructor(code, message){
        this.code = code;
        this.message = message;
    }

    static badRequestError(msg){
        return new ErrorAPI(400, msg);
    }

    static internalError(msg){
        return new ErrorAPI(500, msg);
    }
}

module.exports = ErrorAPI;