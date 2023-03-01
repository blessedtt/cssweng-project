import React from "react";

import selectProductDetail from "./selectProductDetail";

//this function calls selectProductDetail to show which type to show (details or metrics)
//also keeps track of popup states
export default function ProductDetailPopup({ setDetailPopup, setEditPopup, selectedDetails, showType }) {
  return (
	<div>
		{selectProductDetail(showType, selectedDetails)}
			<button
				onClick={() => {
					setDetailPopup(false);
				}}
			>close
			</button>

			<button
				onClick={() => {
					setDetailPopup(false);
					setEditPopup(true);
				}}
			>edit
			</button>
	</div>
  );
};
