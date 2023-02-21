import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import './table_style.css'


function Table({columns, data, isFetching}){
    //https://stackoverflow.com/questions/71889235/react-table-not-showing-newly-fetched-data-when-rendering

    // used alongside useTable (react table)
    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps, // destructured in <table> tag
        getTableBodyProps, // <tbody>
        headerGroups, //headers
        rows,       //rows
        prepareRow, //preparing rows
    } = tableInstance

    if (isFetching) return <div>Loading...</div>

    return (
    <>
        {/*table header data */}
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps}>
                            {
                                headerGroup.headers.map( column =>(
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map( cell =>{
                                        return <td {...cell.getCellProps()}>
                                            {
                                            cell.render('Cell')
                                            }
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
