//session handling installations
const ExpressSession = require("express-session");
const {PrismaSessionStore} = require("@quixo3/prisma-session-store");
const {PrismaClient} = require("@prisma/client");

//creates a session
exports.handleSession = ExpressSession({
		cookie: {
			secure: true,
			maxAge: 7*24*60*60*1000 //in ms, convert to other time unit as needed. 
					//In this case, it's 1 week long
		},
		secret: "vanitas vanitatum, et omnia vanitas",
		resave: false,
		saveUninitialized: false,
		store: new PrismaSessionStore(
			global.prisma,
			{
				checkPeriod: 10*60*1000,
				dbRecordIdIsSessionId: true,
				dbRecordIdFunction: undefined,
			}
		)
	});
