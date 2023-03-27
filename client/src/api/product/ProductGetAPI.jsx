import axios from 'axios';

///fetches data from backend API
async function ProductGetAPI(){
    try{
		const result = await axios.get("/product/get", {withCredentials: true, mode: 'cors'});
		return result.data;
	}
	catch(err){
		throw new Error(err.response.data);
	}
}

export default ProductGetAPI;