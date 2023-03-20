import React, {useState, useEffect} from 'react';

import Popup from '../../Popup';
import { AddUserPopup } from '../AddUserPopup'

export default function AddUserState({addPopup, setAddPopup, addUser}){

	//confirm window
	const [addConfirm, setAddConfirm] = useState(false);

	//user data to be passed to API
	const [userData, setUserData] = useState({});

	//add call
	useEffect(() => {
		if (addConfirm === false) return;
		//add products
		console.log(userData)
		addUser(userData);

		setAddPopup(false);
		setAddConfirm(false);
	}, [addConfirm]);

	return (
		<Popup trigger = {addPopup} id="add">
			<AddUserPopup
				setAdd={setAddPopup} 
				setUserData={setUserData}
				submitAdd={setAddConfirm}
			/>
		</Popup>
	)
}