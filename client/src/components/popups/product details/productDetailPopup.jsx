import React from "react";

import selectProductDetail from "./selectProductDetail";

import { useAuth } from "../../../auth/authContext"

//this function calls selectProductDetail to show which type to show (details or metrics)
//also keeps track of popup states
export default function ProductDetailPopup({ setDetailPopup, setEditPopup, selectedDetails, showType }) {
	
	const {user} = useAuth();
	return (
	<div>
		{selectProductDetail(showType, selectedDetails)}
			<button className='back-btn'
				onClick={() => {
					setDetailPopup(false);
				}}
			>close
			</button>

			{user.type === "Admin" ? 
			<button className='submit-btn'
				onClick={() => {
					setDetailPopup(false);
					setEditPopup(true);
				}}
			>edit
			</button>
			: null}
	</div>
  );
};
