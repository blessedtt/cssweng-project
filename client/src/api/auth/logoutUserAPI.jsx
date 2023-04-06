import axios from 'axios';

export const logoutUserAPI = async (data) => {
	try{
		const result = await axios.delete("/auth/logout", {
			withCredentials: true,
			mode: 'cors',
		})
		return result.data;
	} catch(err) {
		console.log(err);
		throw err;
	}
}