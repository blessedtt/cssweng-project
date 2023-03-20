import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../authContext';	
import { useNavigate } from 'react-router-dom';

export const AdminProtectedLayout = () => {
	const {user, logout} = useAuth();
	const outlet = useOutlet();

	const navigate = useNavigate();

	//check if user is an admin
	if (user.type === 'Admin'){
		return <div>{outlet}</div>
	}

	return <div>
		<h1>You do not have Access to this page.</h1>
		<button onClick={() => navigate('/home')}>Return</button>
	</div>
}