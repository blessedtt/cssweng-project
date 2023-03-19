import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../authContext';

//redirects user to index if not logged in
export const ProtectedLayout = () => {
	const {user, logout} = useAuth();
	const outlet = useOutlet();

	//check if user is actually authenticated
	if (user === null){
		return <Navigate to="/auth/login" />
	}

	//check if user session has expired
	if (Date(user.expiry) >= Date.now()){
		logout();
		return <Navigate to="/auth/login" />
	}
	
	return (
		<div>
			{outlet}
		</div>
	)
}