import '../../css/Popup.css';
import { useForm } from 'react-hook-form';
import { verifyAuthAPI } from '../../api/user/verifyAuthAPI';
import { IoPersonSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';
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
        <div className='conf-div'>
			<button className='confirm-exit' onClick={() => setPopup(false)}>
				X
			</button>
			<br />
			<span>
			<IconContext.Provider
							value ={{ color: '#A67438', size:'70px'}}
						>
						<IoPersonSharp className='conf-icon' />
			</IconContext.Provider>
			</span>
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