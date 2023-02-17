import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'
import './table_style.css'



function Table(props){
    // data will not be recreated at every render
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => props.products, [props.products])    //https://stackoverflow.com/questions/71889235/react-table-not-showing-newly-fetched-data-when-rendering

    // used alongside useTable (react table)
    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps, // destructured in <table> tag
        getTableBodyProps, // <tbody>
        headerGroups, 
        rows, 
        prepareRow,
    } = tableInstance

    return (
        <div>
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
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map( cell =>{
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;
