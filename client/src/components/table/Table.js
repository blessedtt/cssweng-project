import React, { useState, useEffect } from 'react'
import { useTable, useSortBy, useRowSelect } from 'react-table'
import '../../css/table_style.css'

import Popup from '../Popup';

import selectProductDetail from './selectProductDetail';

function Table({columns, data, isFetching, setSelectedRowData, isDelete}){
    
    //product details popup states
    const [showDetails, setShowDetails] = useState(false)
    const [lastSelected, setLastSelected] = useState({})
    const [detailType, setDetailType] = useState(1)

    // used alongside useTable (react table)
    const tableInstance = useTable({ columns, data },
        useSortBy,
        useRowSelect,
        //checkbox hook
        //useTableSelect,
        )

    const {
        getTableProps,      // destructured in <table> tag
        getTableBodyProps,  // <tbody>
        headerGroups,       //headers
        rows,               //rows
        prepareRow,         //preparing rows
        selectedFlatRows,   //selected rows
    } = tableInstance

    //set selected row data from external component
    useEffect(() => {
            setSelectedRowData(selectedFlatRows.map(row => row.original.product_ID))
    }, [selectedFlatRows])

    if (isFetching) return <div><h1>Loading...</h1></div>

    return (
    <>
        {/*
            product details popup 
            I'm not sure how to display it right below the row
        */}
        <Popup trigger = {showDetails} setTrigger = {setShowDetails}>
            <button onClick={() => setShowDetails(false)}>Close</button>

            <button onClick={() => setDetailType(1)} disabled={detailType===1}>Product Details</button>
            <button onClick={() => setDetailType(2)} disabled={detailType===2}>Product Metrics</button>

            {selectProductDetail(detailType, lastSelected)}
        </Popup>


        {/*table header data */}
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps}>

                            {
                            //conditional render of checkbox for delete
                            isDelete ? (
                                <th>
                                    <div>Select:</div>
                                </th>) : (null)
                            }

                            {
                                headerGroup.headers.map( column =>(
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' v' : ' ^') : ''}
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
                            <tr {...row.getRowProps()} 
                                onClick={() => {
                                    setLastSelected(row.original);
                                    if (!isDelete) setShowDetails(true);
                                }}
                            >

                                {
                                //conditional render of checkbox for delete
                                isDelete ? (
                                <td>
                                    <input type="checkbox" {...row.getToggleRowSelectedProps()} />
                                </td>
                                ) : (null)
                                }

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
        </>
    )
}

export default Table;
