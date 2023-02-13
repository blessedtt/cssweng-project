const ErrorAPI = require('./ErrorAPI');

class DBErrorAPI extends ErrorAPI{
    constructor(id, msg){
        super(id, msg);
    }

    static DBError(code){
        switch(code){
            case "P2025": return this.DBItemNotFound("Could not find record.");
            case "P2002": return this.DBConstraintError("Duplicate record.");
            default: return this.internalError("something went wrong.");
        }
    }

    static DBItemNotFound(msg){
        return new DBErrorAPI(500, msg);
    }

    static DBConstraintError(msg){
        return new DBErrorAPI(500, msg);
    } 
}

module.exports = DBErrorAPI;