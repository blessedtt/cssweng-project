// checks if an employee name being used to register is valid
//returns true if valid, throws an error if condition is not met

export default function validateName(name: string){
	try{
		//check if name is empty
		if (name === '') throw new Error('Name cannot be empty');
		
		//check if name has special characters or numbers
		if (name.search(/[^a-zA-Z ]/g) >= 0) throw new Error('Name cannot contain special characters or numbers');

		return true;
	}
	catch(err){
		throw err;
	}

}	