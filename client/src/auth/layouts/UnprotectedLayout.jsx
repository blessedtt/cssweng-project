import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../authContext';

//prevent user from accessing login page if they are already logged in
export const UnprotectedLayout = () => {
	const {user} = useAuth();
	const outlet = useOutlet();
	
	if (!user){
		return 	<div>{outlet}</div>
	}

	return <Navigate to={'/home'} />
}