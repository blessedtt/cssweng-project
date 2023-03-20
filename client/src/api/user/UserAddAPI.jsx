import axios from 'axios';


//API call to add product
async function UserAddAPI(userData, FETCH_URL){
    try{
		const result = await axios.post(FETCH_URL+'/user/add', JSON.stringify(userData), {
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