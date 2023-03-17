import axios from 'axios';

///fetches data from backend API
async function UserGetAPI({FETCH_URL}){
    try{
		const result = await axios.get(FETCH_URL+"/user/get")
		return result.data;
	}
	catch(err){
		throw new Error(err.response.data);
	}
}

export default UserGetAPI;