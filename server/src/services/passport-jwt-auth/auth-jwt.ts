import passport from 'passport';
import jsonwebtoken from 'jsonwebtoken';

const jwt = jsonwebtoken;

export const COOKIE_OPTIONS ={
	httpOnly: true,
	sameSite: 'none',
	secure: true,
	signed: true,
	//maxage is 1 hour
	maxAge: 3600000
}

export const createToken = (data: any) => {
	return jwt.sign({data}, "SECRET", {expiresIn: '1h'});
}

export const createRefreshToken = (data: any) => {
	return jwt.sign({data}, "SECRET_REFRESH", {expiresIn: '1d'});
}

export const verifyToken = passport.authenticate('jwt', {session: false});