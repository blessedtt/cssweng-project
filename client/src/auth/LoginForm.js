import '../css/Login.css'

import { useState } from 'react';

import { IoPersonSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';

import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

export const LoginForm = ({login}) => {

	const navigate = useNavigate();

	const { register, handleSubmit, errors } = useForm();

	const [errorMessage, setErrorMessage] = useState("");

	const log_in = async (data) => {
		try{
			setErrorMessage("Logging in...");
			await login(data);
			setErrorMessage("Success! Redirecting...");

		} catch(err){
			if (err.response.status === 401)
				setErrorMessage("Invalid email or Password")
			console.log(err);
		};
	}

    return(
		<div className='login-container'>
			<div className='login-elements'>
				<ul>
					<li>
						<IconContext.Provider
							value ={{ color: '#A67438', size:'200px'}}
						>
						<IoPersonSharp />
						</IconContext.Provider>
					</li>
					<li id='login-text'>
						Login
					</li>
					<form onSubmit={handleSubmit(log_in)}>
						<li>
							<label>Email</label>
								<input
									type="text"
									name="email"
									placeholder="Email"
									required={true}
									{...register('email', { required: "Email is required" })}
								/>
						</li>
						<li>
							<label>Password</label>
								<input
									type="password"
									name="password"
									placeholder="Password"
									required={true}
									{...register('password', { required: "Password is required" })}
								/>
						</li>
						{/*error message*/}
						<li className='error-message'>{errorMessage}</li>
						<li>
							<input type='submit' value='Log-in'  className='login-enter' />
						</li>
					</form>
				</ul>
			</div>
		</div>
	)
}