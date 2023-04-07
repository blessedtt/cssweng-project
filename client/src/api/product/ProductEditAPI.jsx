import axios from 'axios';

//requests an edit of a product in the database
async function ProductEditAPI({productData}){
	try{
		let url = '/product/'+productData.product_ID;
		const result = await axios.put(url, JSON.stringify(productData), 
			{
				mode: 'cors',
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		return result.data;
	}
	catch(err){
		console.log(err)
		throw new Error(err.response.data);
	}
}

export default ProductEditAPI;