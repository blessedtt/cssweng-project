import axios from 'axios';


//API call to add product
async function ProductAddAPI({productData, FETCH_URL}){
    try{
		const result = await axios.post(FETCH_URL+'/product/add', JSON.stringify(productData), {
			mode: 'cors',
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