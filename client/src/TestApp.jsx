import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from './auth/authContext';

import axios from 'axios';

import { ProtectedLayout } from './auth/ProtectedLayout';
import { UnprotectedLayout } from './auth/UnprotectedLayout';

export const TestApp = () => {

	const navigate = useNavigate();

	const authContext = useAuth();

	//useform
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		//axios post
		axios.post("/login", 
		JSON.stringify({
			email: data.email,
			password: data.password
		}),
			{
				withCredentials: true,
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		.then( (result) => {
			console.log('done');
			console.log(result.data.userdata);
			authContext.login(result.data.userdata);
			navigate('/index');
		})
		.catch(err => {
			console.log(err);
		})

	}

	const testGet = () => {
		axios.get("/test")
		.then((result) => {
			console.log(result);
		})
	}

	const test_logout = () => {
		axios.delete("/logout")
		.then((result) => {
			console.log(result)
			authContext.logout();
			navigate('/login');
		})
	}

	return (
		<Routes>
			<Route element={<UnprotectedLayout />}>
				<Route path='/login' element={
						<div>
							<form onSubmit={handleSubmit(onSubmit)}>
								<input
									type="text"
									name="email"
									placeholder="Email"
									{...register('email', { required: "Email is required" })}
								/>

								<input
									type="password"
									name="password"
									placeholder="Password"
									{...register('password', { required: "Password is required" })}
								/>
								
								<button type="submit">Submit</button>
							</form>
						</div>
				} />
			</Route>
			<Route element={<ProtectedLayout />} >
				<Route path='/index' element={<><h1>Hello!!!!!</h1>
											<button onClick={testGet}> Test Get </button>
											<button onClick={test_logout}> Logout </button>
										</>} />
			</Route>
		</Routes>
	)
}