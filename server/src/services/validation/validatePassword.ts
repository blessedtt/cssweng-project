//validates a password in user registration to be used by the user to login
//returns true if the password is valid, false otherwise
//rules:
	//1. must be between 6 and 16 characters
	//2. must contain at least 1 uppercase letter
	//3. must contain at least 1 number
	//4. cannot contain spaces

export default function validatePassword(password: string){
    const errors = [];
    if (password.length < 6 || password.length > 16) {
        errors.push("The password must be between 6 and 16 characters"); 
    }
    if (password.search(/[A-Z]/) < 0) {
        errors.push("The password must contain at least one capital letter");
	}
	if (password.search(/[a-z]/) < 0) {
		errors.push("The password must contain at least one small letter");
    }
    if (password.search(/[0-9]/) < 0) {
        errors.push("The password must contain at least one digit"); 
    }
    if (errors.length > 0) {
        throw new Error(errors.join(", "));
    }
    return true;
}
