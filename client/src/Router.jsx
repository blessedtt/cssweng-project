import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import { useAuth } from './auth/authContext';

import { ProtectedLayout } from './auth/layouts/ProtectedLayout';
import { UnprotectedLayout } from './auth/layouts/UnprotectedLayout';

import { LoginForm } from './auth/LoginForm';
import { AdminProtectedLayout } from './auth/layouts/AdminProtectedLayout';

import App from './App';
import AccountPage from './AccountPage';

export const AppRouter = () => {
	const navigate = useNavigate();
	const {user, login, logout} = useAuth();

	useEffect(() => {
		if (user === null){
			navigate('/auth/login');
		}
	}, [user])

	return(
		<Routes>
			<Route path='/auth' element={<UnprotectedLayout />}>
				<Route path='/auth/login' element={<LoginForm login={login} />} />
			</Route>	 

			<Route element={<ProtectedLayout />}>
				
				<Route path='/home' element={<App />} />
				
				<Route path='/admin' element={<AdminProtectedLayout />} >
					<Route path='/admin/home' element={<AccountPage />} />
				</Route>

			</Route>

			<Route path='*' element={<Navigate to='/auth/login' />} />
			
		</Routes>
	)
}