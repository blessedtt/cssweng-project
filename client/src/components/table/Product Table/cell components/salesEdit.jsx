import { useState } from 'react';
import '../../../../css/App.css'
const preventNegativeInput = (event) => {
	if (event.key === "-" || event.key === "+") {
		event.preventDefault();
	}
} 

export default function SalesEdit({props, cellProps}){
	const [inputData, setInputData] = useState(0);
	
	return (
		<div className="sales-edit">
		<button onClick={() => {
			if (Number(inputData) !== 0){
				//calculate new stock
				const rowData = {...cellProps.row.original};
				rowData["sales"] = rowData["sales"] + Number(inputData);
				console.log(rowData);

				//update sales via editProduct
				props.updateSales(rowData);
			}
		}}
		>+</button>

		<input 
			type="number" 
			min="0" max="100" 
			defaultValue={0} 
			onKeyDown={(e) => { preventNegativeInput(e) }}
			onChange={(e) => { setInputData(e.target.value) }}
		/>

		<button onClick={() => {
			if (Number(inputData) !== 0){
				const rowData = {...cellProps.row.original};
				rowData["sales"] = rowData["sales"] - Number(inputData);
				
				props.updateSales(rowData);
			}
		}}
		>-</button>
	</div>
	)

}