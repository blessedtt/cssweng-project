import { useState } from 'react';


export default function StockEdit({props, cellProps}){
	const [inputData, setInputData] = useState(0);
	
	return (
		<div className="stock-edit">
		<button onClick={() => {
			if (Number(inputData) !== 0){
				console.log(inputData)

				//calculate new stock
				const rowData = {...cellProps.row.original};
				rowData["stock"] = rowData["stock"] + Number(inputData);
				console.log(rowData);

				//update sales via editProduct
				props.updateStock(rowData);
			}
		}}
		>^</button>

		<input 
			type="number" 
			min="0" max="100" 
			defaultValue={0} 
			onChange={(e) => { setInputData(e.target.value) }}
		/>

		<button onClick={() => {
			if (Number(inputData) !== 0){
				const rowData = {...cellProps.row.original};
				rowData["stock"] = rowData["stock"] - Number(inputData);
				
				console.log(rowData)
				props.updateStock(rowData);
			}
		}}
		>v</button>
	</div>
	)

}