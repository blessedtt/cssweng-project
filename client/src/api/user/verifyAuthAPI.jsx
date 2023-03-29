import axios from 'axios';

export const verifyAuthAPI = async ({password}) => {

	try{
		const result = await axios.post("/verifyAdmin", 
		JSON.stringify({
			password: password
		}),
			{
				withCredentials: true,
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		//return userdata
		return result.data;
	} catch(err){
		console.log(err);
		throw err;
	}
} 