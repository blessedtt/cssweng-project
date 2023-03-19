import axios from 'axios';

///fetches category data from backend API
async function CategoryGetAPI({FETCH_URL}){
    try{
		const result = await axios.get(FETCH_URL+"/category/get", {withCredentials: true, mode: 'cors'})
		return result.data;
	}
	catch (err){
		throw new Error(err.response.data);
	}
}

export default CategoryGetAPI;