import axios from 'axios';
import { useEffect, useState } from 'react';

//check if session exists on server with GET '/auth/checkAuth'
export const useCheckAuth = () => {
	const [authdata, setAuthdata] = useState({});
	const [loading, setLoading] = useState(true);

	const checkAuth = () => {
		setLoading(true);
		axios.get('/auth/checkAuth')
		.then((result) => {
			setAuthdata(result.data.userdata);
			setLoading(false);
		})
		.catch((err) => {
			console.log(err);
			setAuthdata(null)
			setLoading(false);
		})
	}

	useEffect(() => {
		checkAuth();
	}, []);

	return [authdata, loading, checkAuth];
}