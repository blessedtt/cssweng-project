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
			<h5 className='header'>
				Confirm Delete
			</h5>
			<form name = 'prodForm'>
			    <label>
					Enter admin password to confirm deletion: 
				</label>
				<input type = 'password' />
				<input type = 'submit' value ='Submit' onClick={setConfirm(true)} />
			</form>
		</div>
    )
}
export default ConfirmUserPopup;