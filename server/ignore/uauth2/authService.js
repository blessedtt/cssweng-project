//global prisma client instance
prisma = global.prisma;

//this file handles user registration and logging in.

//dependencies: bcryptjs, jsonwebtoken
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('./jwt');
const createError = require('http-errors');

class AuthService{

    //creates
    static async register(data){
        const {email} = data;
        data.password = bcrypt.hashSync(data.password);
        let user = prisma.user.create({ data });

        data.accessToken = await jwt.signAccessToken(user);
        
        return data;
    }

    //
    static async login(data){
        const {email, pass} = data;
        const user = prisma.user.findUniqueOrThrow({
            where : {email: email}
        });

        const checkPass = bcrypt.compareSync(pass, user.pass);
        if (!checkPass)
            throw createError.Unauthorized("Email or Password is invalid.");

        delete user.password;
        const accessToken = await jwt.signAccessToken(user);
        return {...user, accessToken}
    }
}

module.exports = AuthService;