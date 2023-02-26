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
				Header: 'BRAND',
				accessor: 'brand'
			},
			{
				Header: 'PRODUCT',
				accessor: 'name',
				Cell: (cellProps) => (
				<>
					<p>{cellProps.value}</p>
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
						<button onClick={() => props.increaseStock()}>^</button>
						<button onClick={() => props.decreaseStock()}>v</button>
					</>
				)
			},
			{
				Header: 'SALES',
				accessor: 'sales',
				Cell: (cellProps) => (
					<>
						<button onClick={() =>  props.increaseSales()}>^</button>
						<button onClick={() =>  props.decreaseSales()}>v</button>
						<p>{cellProps.value}</p>
						<button
							onClick={() => {
								props.setSelectedDetails(cellProps.row.original);
								props.setShowType(2);
							}}
						>
							details
						</button>
					</>
				)
			},
		],
		[]
	)
	return columns;
}