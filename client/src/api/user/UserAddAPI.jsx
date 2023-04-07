import axios from 'axios';


//API call to add product
async function UserAddAPI(userData){
    try{
		const result = await axios.post('/user/add', JSON.stringify(userData), {
			mode: 'cors',
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
	catch(err){
		console.log(err);
		throw new Error(err.response.data);
	}
}

export default UserAddAPI;