import { IconContext } from 'react-icons';
import { IoTrashBinSharp } from 'react-icons/io5';
import Popup from '../Popup'
import { useState } from 'react';
import ConfirmUserPopup from './confirmUserPopup';

export default function DeleteUserPopup({setDelete, setDeleteUserPopup}) {
	const [confirmPopup, setConfirmPopup] = useState(false);
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
						setConfirmPopup(false);
					}}>
						Yes
					</button>
				</li>
			</ul>
			<Popup trigger = {setConfirmPopup}>
				<ConfirmUserPopup
					setConfirm={setConfirmPopup}
				/>
			</Popup>
			
		</div>
	);
}