import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const preventNegPosInput = (event) => {
	if (event.key === "-" || event.key === "+") {
		event.preventDefault();
	}
} 

export const AddUserPopup = (
    {
        setAdd,
		setUserdata,
		submitAdd
    }
    ) => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    //submits data to API
    const onSubmit = (data) => {
        console.log(data)
		
        setUserdata(data)
		submitAdd(true)
	}

	const [password, setPassword] = useState({});
	const [confirmPassword, setConfirmPassword] = useState({});

	const [passwordError, setPasswordError] = useState('');
	const [confirmPassError, setConfirmPassError] = useState('');

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}

	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
	}

	const validatePassword = () => {
		let ret = false;
		if (password.length < 6) {
			setPasswordError('Password must be at least 6 characters');
		} else if (password.length > 16){
			setPasswordError('Password must be less than 16 characters');
		} else if (password.search(/[0-9]/) < 0) {
			setPasswordError("The password must contain at least one digit."); 
		} else if (password.search(/[a-z]/i) < 0) {
			setPasswordError("The password must contain at least one letter.");
		} else {
			setPasswordError('');
			ret = true;
		}
		return ret;
	}

	const checkEqualPasswords = () => {
		if (password !== confirmPassword) {
			setConfirmPassError('Passwords do not match');
			return false
		} else {
			setConfirmPassError('');
			return true
		}
	}

	const validateForm = () => {
		let ret = false;
		if (validatePassword() && checkEqualPasswords()) {
			ret = true;
		}
		return ret;
	}

    return (
        <div>
            <h5 className='header'>Add New Product</h5>
            <form name ="prodForm" onSubmit={handleSubmit(onSubmit)}>
            <ul>


                <li>
                <label htmlFor = 'name' >Full Name</label>
                <input name ='name' type='text' {...register('name')} required></input>
                </li>

				<li>
                <label htmlFor = 'email' >email</label>
                <input name ='email' type='text' {...register('email') } required></input>
                </li>

				<li>
                <label htmlFor = 'password' >Password</label>
                <input name ='password' type='password' onChange={() => validateForm}  {...register('password', {
					minLength: 6,
					maxLength: 16,
					// regex: The password must contain at least one letter and at least one digit.
					pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/,
				})} required />
                </li>
				{passwordError !== '' ? <p>{passwordError}</p> : null }

				<li>
                <label htmlFor = 'confirm-password' >Confirm Password</label>
                <input name ='password' type='password' onChange={() => validateForm} {...register('password')} required></input>
                </li>
				{ confirmPassError !== '' ? <p>{confirmPassError}</p> : null }

            </ul>
            <ul className='popup-btns'>
					<li>
						<button className='back-btn' onClick={() => setAdd(false)}>
							Back
						</button>
					</li>
                <li>

                <input className='submit-btn' type = 'submit' value = 'Submit' onClick={() =>{
                }} disabled={validateForm} />
                    
                {/* </button> */}
                </li>
            </ul>
            </form>
        </div>
    )
}