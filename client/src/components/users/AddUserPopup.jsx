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
		setUserData,
		submitAdd
    }
    ) => {


    const { register, handleSubmit } = useForm();

    //submits data to API
    const submitData = (data) => {
        console.log(data)
		
        setUserData(data)
		submitAdd(true)
	}



    return (
        <div>
            <h5 className='header'>Add New Employee</h5>
            <form name ="prodForm" onSubmit={handleSubmit(submitData)}>
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
					<input name ='password' type='password'  {...register('password')} required />	
                </li>

            </ul>
            <ul className='popup-btns'>
						<li>
							<button className='back-btn' onClick={() => setAdd(false)}>
								Back
							</button>
						</li>
					<li>

					<input className='submit-btn' type = 'submit' value = 'Submit' onClick={() => {setAdd(true)}}/>
					</li>
				</ul>
            </form>
        </div>
    )
}