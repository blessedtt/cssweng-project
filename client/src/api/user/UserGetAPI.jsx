import axios from 'axios';

///fetches data from backend API
async function UserGetAPI(){
    try{
		const result = await axios.get("/user/get", {withCredentials: true, mode: 'cors'})
		return result.data;
	}
	catch(err){
		throw new Error(err.response.data);
	}
}

export default UserGetAPI;