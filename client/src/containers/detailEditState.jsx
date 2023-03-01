import React, {useState, useEffect} from 'react';

import Popup from '../components/Popup';
import ProductDetailPopup from '../components/popups/product details/productDetailPopup';
import EditProductPopup from '../components/popups/editProductPopup';

export default function DetailEditState({editProduct, selectedProduct, detailType, clearSelect}){

	const [detailPopup, setDetailPopup] = useState(false);
	const [editPopup, setEditPopup] = useState(false);

	const [EditConfirm, setEditConfirm] = useState(false);

	const [productData, setProductData] = useState({});

	//clear selected product data unless edit popup is open
	useEffect(() => {
		if (editPopup === true) return;
		if (detailPopup === true) return;
		clearSelect()
	}, [editPopup, detailPopup]);

	//edit call
	useEffect(() => {
		if (EditConfirm === false) return;
		//edit products
		editProduct(productData);

		setEditPopup(false);
		setEditConfirm(false);
	}, [EditConfirm]);

	//show detail popup
	useEffect(() => {
		if (detailType === 0) return;
		setDetailPopup(true);
	}, [detailType]);
	
	return(
		<>
			<Popup trigger = {detailPopup} id="Detail">
				<ProductDetailPopup 
					setDetailPopup={setDetailPopup} 
					setEditPopup={setEditPopup} 
					selectedDetails={selectedProduct} 
					showType={detailType} 
				/>
			</Popup>

			<Popup trigger = {editPopup} id="Edit">
				<EditProductPopup 
					setEdit={setEditPopup}
					currentData={selectedProduct}
					setProductData={setProductData}
					submitEdit={setEditConfirm}
				/>
			</Popup>
		</>
	)
}