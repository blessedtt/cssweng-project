import React, {useState, useEffect} from 'react';

import Popup from '../components/Popup';
import AddProductPopup from '../components/popups/addProductPopup';

export default function AddState({addPopup, setAddPopup, addProduct, categories}){

	//new product state to be passed to add api
	const [addConfirm, setAddConfirm] = useState(false);

	const [productData, setProductData] = useState({});

	//add call
	useEffect(() => {
		if (addConfirm === false) return;
		//add products
		console.log(productData)
		addProduct(productData);

		setAddPopup(false);
		setAddConfirm(false);
	}, [addConfirm]);

	return (
		<Popup trigger = {addPopup} id="add">
			<AddProductPopup 
				categories={categories} 
				setAdd={setAddPopup} 
				setProductData={setProductData}
				submitAdd={setAddConfirm}
			/>
		</Popup>
	)
}