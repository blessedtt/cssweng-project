import React, { useState, useEffect } from 'react';
import Table from '../Table';
import useProductColumns from './useProductColumns';

export default function ProductTable({
	data,
	isFetching,
	isDelete,
	nameFilter,
	setSelectedRowData,
	setCurrentSelectedProduct,
	setShowType,
	setUpdateStock,
	setUpdateSales,
}) {
	//product details popup states
	const [selectedDetails, setSelectedDetails] = useState({});

	const columns = useProductColumns({
		setSelectedDetails,
		setShowType,
		updateStock: setUpdateStock,
		updateSales: setUpdateSales,
	});

	//send selected row data ids to parent component
	useEffect(() => {
		if (Object.keys(selectedDetails).length === 0) return;
		setCurrentSelectedProduct(selectedDetails);
		setSelectedDetails({});
	}, [selectedDetails]);

	return isFetching ? 
		(<div><h1>Loading...</h1></div>)
		:  (
			<Table
				data={data}
				columns={columns}
				setSelectedRowData={setSelectedRowData}
				tableOptions={{
					initialState: {
						sortBy: [
							{
								id: 'last_updated',
								desc: true,
							}
						]
					}
				}}
				isDelete={isDelete}
				nameFilter={nameFilter}
			/>
		);
}