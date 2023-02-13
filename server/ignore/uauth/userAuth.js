//checks if the user is logged in
exports.isPrivate = (req, res, next) => {
	// Must be authenticated to go to the next function
	if (req.session.username) {
		return next()
	} else {
		res.redirect('/');
	}
  };

//if user is not logged in
exports.isPublic = (req, res, next) => {	
  // If authenticated, go to home page
	if (req.session.username) {
		res.redirect('/home');
	} else {
		return next();
	}
};

