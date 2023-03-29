import { useForm } from 'react-hook-form';

import { verifyAuthAPI } from '../../api/user/verifyAuthAPI';

const ConfirmUserDelPopup =(
    {
        setPopup,
		setPass,
    }
) => {
    const {register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		setPass(data.pass);
		setPopup(false);
	}

    return (
        <div>
			<button className='confirm-exit' onClick={() => setPopup(false)}>
				X
			</button>
			<h5 className='header'>
				Confirm Delete
			</h5>
			<form className='submit-text' name = 'prodForm' onSubmit={handleSubmit(onSubmit)}>
				<span >Enter admin password to confirm deletion: </span>
				<br />
				<input type = 'password' {...register('pass')} required/>
				<br />
				<input className='submit-conf' type = 'submit' value ='Submit' onClick={() => setPopup(true)} />
				
			</form>
		</div>
    )
}
export default ConfirmUserDelPopup;