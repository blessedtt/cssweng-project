import { IconContext } from 'react-icons';
import { IoTrashBinSharp } from 'react-icons/io5';
import Popup from '../../components/Popup';
import '../../css/Popup.css'
export default function DeleteUserPopup({setDelete, setDeleteUserPopup}) {
	return (
		<div className='delete-success'>
			<ul>
				<li>
					<IconContext.Provider value={{ color: '#DD9D34', size:'44px'}}>
						<IoTrashBinSharp />
					</IconContext.Provider>
				</li>
				<li>
					Are you sure you want to delete?
				</li>
				<li>
					<button className='cancel-btn' onClick={() => {
						setDeleteUserPopup(false)
						setDelete(false)
					}}>
						No
					</button>
					<button className='ok-btn' onClick={() => {
						setDeleteUserPopup(false)
						// confirm admin password
						// <ConfirmationPopup/>
						// setDelete(true)
					}}>
						Yes
					</button>
				</li>
			</ul>
			<Popup trigger = {true}>
				<div>
					<h5 className ='header'>Confirm Delete</h5>
					<form name ="confirm">
						Input admin password to confirm: 
						<br></br>
						<input type = "password"></input>
					</form>

				</div>
			</Popup>
		</div>
	);
}
