import axios from 'axios';

//api call to delete user/s
async function UserDeleteAPI({userID, FETCH_URL}) {
    if (userID.length === null) throw new Error('No user selected');
	
	try{
		const result = await axios.delete(FETCH_URL+'/user/'+userID, {
			mode: 'cors',
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json'
			},
		})
		console.log(result)
		return result;
	}
	catch(err){
		throw new Error(err.response.data);
	}
}

export default UserDeleteAPI;