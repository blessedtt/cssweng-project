import { useMemo, useState } from 'react';
import { format } from 'date-fns';

export default function useUserColumns(props){
	const columns = useMemo(() => [
	{
		Header: 'DELETE',
		accessor: 'delete',
		Cell: (cellProps => (
			<>
				{/* create delete button that returns the data of the row to props.setDeleteID */}
				<button onClick={() => {
					props.setDeleteID(cellProps.row.original.email);
				}}>
					delete
				</button>

			</>
		))
	},
    {
        Header: 'FULL NAME',
        accessor: 'name',
    },
    {
        Header: 'EMAIL',
        accessor: 'email',
    },
    {
        Header: 'DATE CREATED',
        accessor: 'date_created',
		Cell: ({value}) => {
            return format(new Date(value), "MM/dd/yyyy 'at' h:mm:ss a", 'en-PH')
        }
    },
], [])
	return columns;
}