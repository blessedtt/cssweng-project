import axios from 'axios';

//api call to delete product/s
async function ProductDeleteAPI({productIDList, FETCH_URL}) {
    if (productIDList.length === 0) throw new Error('No products selected');
	
	try{
		const result = await axios.delete(FETCH_URL+'/product/remove', {
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			data: {
				'idList': productIDList
			}
		})
		return result.data;
	}
	catch(err){
		throw new Error(err.response.data);
	}
}

export default ProductDeleteAPI;