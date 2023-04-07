import axios from 'axios';


//API call to add product
async function ProductAddAPI(productData){
    try{
		const result = await axios.post('/product/add', JSON.stringify(productData), {
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

export default ProductAddAPI;