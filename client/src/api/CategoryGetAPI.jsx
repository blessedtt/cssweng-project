import axios from 'axios';

///fetches category data from backend API
async function CategoryGetAPI({FETCH_URL}){
    try{
		const result = await axios.get(FETCH_URL+"/category/get")
		return result.data;
	}
	catch (err){
		throw new Error(err);
	}
}

export default CategoryGetAPI;