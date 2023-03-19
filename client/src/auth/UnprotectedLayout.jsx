import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from './authContext';


//prevent user from accessing login page if they are already logged in
export const UnprotectedLayout = () => {
	const {user} = useAuth();
	const outlet = useOutlet();

	console.log(user)
	if (!user){

		return 	<div>{outlet}</div>
	}

	console.log(user)
	return <Navigate to={'/index'} />
}