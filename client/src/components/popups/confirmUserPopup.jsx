import { useState } from 'react';
import { useForm} from 'react-hook-form';
import Select from 'react-select';
const ConfirmUserPopup =(
    {
        setConfirm,
    }
) => {
    const {register, handleSubmit } = useForm();

    const onSubmit = (data) => {

    }

    return (
        <div>
			<button className='confirm-exit'>
				X
			</button>
			<h5 className='header'>
				Confirm Delete
			</h5>
			<form className='submit-text' name = 'prodForm'>
				<span >Enter admin password to confirm deletion: </span>
				<br />
				<input type = 'password' />
				<br />
				<input className='submit-conf' type = 'submit' value ='Submit' onClick={setConfirm(true)} />
				
			</form>
		</div>
    )
}
export default ConfirmUserPopup;