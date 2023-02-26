import React from "react";

import selectProductDetail from "./product details/selectProductDetail";

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
