import axios from 'axios';

//api call to delete user/s
async function UserDeleteAPI({userIDList, FETCH_URL}) {
    if (userIDList.length === 0) throw new Error('No users selected');
	
	try{
		const result = await axios.delete(FETCH_URL+'/user/remove', {
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			data: {
				'idList': userIDList
			}
		})
		return result.data;
	}
	catch(err){
		throw new Error(err.response.data);
	}
}

export default UserDeleteAPI;