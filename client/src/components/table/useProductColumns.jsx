import React, { useMemo } from 'react';
import { format } from 'date-fns';


//generates special column cells for the product table

//some very coupled sections:
//1. Product and sales columns - has special functions that are related to parent state
//   	- setSelectedDetails - sets the product details to be shown in the popup
//		- setShowType - sets the type of popup to be shown
//		- updateProduct - updates the product in the database

//2. Stock and Sales columns - has special functions that are related to parent state
//		- increaseStock - increases the stock of the product
//		- decreaseStock - decreases the stock of the product
//		- increaseSales - increases the sales of the product
//		- decreaseSales - decreases the sales of the product


export default function useProductColumns(props) {

	const columns = useMemo(
		() => [
			{
				Header: 'SELECT: ',
				accessor: 'selection',
				Cell: ({row}) => (
					<>
						<input type="checkbox" {...row.getToggleRowSelectedProps()} />
					</>
				),
			},
			{
				Header: 'DATE UPDATED',
				accessor: 'last_updated',
				Cell: ({value}) => {
					return format(new Date(value), "MM/dd/yyyy 'at' h:mm:ss a", 'en-PH')
				},
			},
			{
				Header: 'ITEM NO.',
				accessor: 'product_ID'
			},
			{
				Header: 'PRODUCT',
				accessor: 'name',
				Cell: (cellProps) => (
				<>
					<p>{cellProps.row.original["name"]+ " - " + cellProps.row.original["brand"]}</p>
					{/*Button to activate product details */}
					<button onClick={() => {
							props.setSelectedDetails(cellProps.row.original);
							props.setShowType(1);
						}}>
						details
					</button>
				</>
					)
			},
			{
				Header: 'ON-HAND STOCK',
				accessor: 'stock',
				Cell: (props) => (
					<>
						<p>{props.value}</p>
						<form onSubmit={() => props.updateProduct()}>
							<button onClick={() => props.increaseStock()}>^</button>
							<input type="number" min="0" max="100" value={0} />
							<button onClick={() => props.decreaseStock()}>v</button>
						</form>
					</>
				)
			},
			{
				Header: 'STATUS',
				accessor: 'status',
				Cell: (cellProps) => (
					
					<>
						<p>{cellProps.row.original["order_amt"] ? "ORDERED" : (cellProps.row.original["stock"] !== 0 ? "IN STOCK" : "OUT OF STOCK" )}</p>
					</>
				)
			},
			{
				Header: 'SALES',
				accessor: 'sales',
				Cell: (cellProps) => (
					<>
						<p>{cellProps.value}</p>
						<button
							onClick={() => {
								props.setSelectedDetails(cellProps.row.original);
								props.setShowType(2);
							}}
						>
							details
						</button>

						<form onSubmit={() => props.updateProduct()}>
							<button onClick={() => props.increaseSales()}>^</button>
							<input type="number" min="0" max="100" value={0} />
							<button onClick={() => props.decreaseSales()}>v</button>
						</form>
					</>
				)
			},
		],
		[]
	)
	return columns;
}