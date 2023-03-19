import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from './authContext';


//redirects user to index if not logged in
export const ProtectedLayout = () => {
	const {user} = useAuth();
	const outlet = useOutlet();

	if (!user){

		return <Navigate to="/login" />
	}

	console.log(user)
	return (
		<div>
			{outlet}
		</div>
	)
}