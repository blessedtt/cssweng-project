import axios from 'axios';
import { useEffect, useState } from 'react';

//check if session exists on server with GET '/checkAuth'
export const useCheckAuth = () => {
	const [authdata, setAuthdata] = useState({});
	const [loading, setLoading] = useState(true);

	const checkAuth = () => {
		setLoading(true);
		axios.get('/checkAuth')
		.then((result) => {
			console.log(result.data.userdata)
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