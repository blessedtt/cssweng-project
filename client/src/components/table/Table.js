import React, { useState, useEffect } from 'react'
import { useTable, useSortBy, useRowSelect } from 'react-table'
import '../../css/table_style.css'

import Popup from '../Popup';
import useProductColumns from './Product Table/useProductColumns';

function Table({
	data, 
	columns,
	setSelectedRowData,
	isDelete,
	}){
    
    //product details popup states


    // used alongside useTable (react table)
    const tableInstance = useTable(
		{ columns, data, },
        useSortBy,
        useRowSelect,
        )

    const {
        getTableProps,      // destructured in <table> tag
        getTableBodyProps,  // <tbody>
        headerGroups,       //headers
        rows,               //rows
        prepareRow,         //preparing rows
        selectedFlatRows,   //selected rows
		toggleHideColumn,   //hide columns
    } = tableInstance

    //send selected row data ids to parent component
    useEffect(() => {
        setSelectedRowData(selectedFlatRows.map(row => row.original.product_ID))
    }, [selectedFlatRows]);

	//hide selection column when not in delete mode
	useEffect(() => {
			toggleHideColumn('delete', !isDelete);
	}, [isDelete]);

	return (
		<table {...getTableProps()}>
			<thead>
				{
					headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps}>
							{
								headerGroup.headers.map( column =>(
									//sort options
									<th {...column.getHeaderProps(column.getSortByToggleProps())}>
										{column.render('Header')}
										<span>
										{column.isSorted ? (column.isSortedDesc ? ' v' : ' ^') : ' - '}
										</span>
									</th>
								))
							}
						</tr>
					))
				}
			</thead>

			{/* table body data */} 
			<tbody {...getTableBodyProps()}>
				{
					rows.map(row => {
						prepareRow(row)
						return (
							<tr>
								{
									row.cells.map( cell =>{
										return <td {...cell.getCellProps()}>
											{ cell.render('Cell') }
											</td>
									})
								}
							</tr>
						)
					})
				}
			</tbody>
		</table>
	)
}

export default Table;