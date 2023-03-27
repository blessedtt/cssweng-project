import axios from 'axios';

///fetches category data from backend API
async function CategoryGetAPI(){
    try{
		const result = await axios.get("/category/get", {withCredentials: true, mode: 'cors'})
		return result.data;
	}
	catch (err){
		throw new Error(err.response.data);
	}
}

export default CategoryGetAPI;