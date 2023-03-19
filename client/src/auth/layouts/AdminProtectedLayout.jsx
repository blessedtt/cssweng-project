import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../authContext';	

export const AdminProtectedLayout = () => {
	const {user, logout} = useAuth();
	const outlet = useOutlet();

	if (user.type === 'Admin'){
		return <div>{outlet}</div>
	}

	return <div>
		<h1>You do not have Access to this page.</h1>
	</div>
}