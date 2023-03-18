import passport from 'passport';
import {Strategy as jwtStrategy, ExtractJwt} from 'passport-jwt';
import userGetUnique from '../user/api/userGetUnique';


const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: "SECRET"
}

passport.use('jwt', 
	new jwtStrategy(opts, (jwt_payload, done) => {
		try{
			const user = userGetUnique({email: jwt_payload.email});
			return done(null, user);

		} catch (err){
			return done(err, false);
		}
	})
)