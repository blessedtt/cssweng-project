import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Routes, Route, useNavigate } from 'react-router-dom';

import axios from 'axios';

export const TestApp = () => {

	const navigate = useNavigate();

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
			console.log(result);
			navigate('/');
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

	return (
		<Routes>
			<Route path='/login' element={
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							type="text"
							name="email"
							placeholder="Email"
							{...register('email', { required: "Email is required" })}
						/>

						{/*password to login */}
						<input
							type="password"
							name="password"
							placeholder="Password"
							{...register('password', { required: "Password is required" })}
						/>
						
						{/*submit button */}
						<button type="submit">Submit</button>
					</form>
				</div>
			} />

			<Route path='/' element={<><h1>Hello</h1>
										<button onClick={testGet} /></>} />
		</Routes>
	)
}