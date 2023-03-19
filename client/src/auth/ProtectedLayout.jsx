import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from './authContext';


//redirects user to index if not logged in
export const ProtectedLayout = () => {
	const {user} = useAuth();
	const outlet = useOutlet();

	console.log(user)
	if (!user){

		return <Navigate to="/login" />
	}
	
	return (
		<div>
			{outlet}
		</div>
	)
}