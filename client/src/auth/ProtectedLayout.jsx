import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from './authContext';


//redirects user to index if not logged in
export const ProtectedLayout = () => {
	const {user, logout} = useAuth();
	const outlet = useOutlet();

	//check if user is actually authenticated
	if (!user){
		return <Navigate to="/login" />
	}

	//check if user session has expired
	if (Date(user.expiry) >= Date.now()){
		logout();
	}

	return (
		<div>
			{outlet}
		</div>
	)
}