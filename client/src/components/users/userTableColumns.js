import { useMemo, useState } from 'react';
import { format } from 'date-fns';
import { IoAddCircleOutline, IoPencil, IoTrashSharp, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';


export default function useUserColumns(props){
	const columns = useMemo(() => [
	{
		Header: 'DELETE',
		accessor: 'delete',
		Cell: (cellProps => (
			<>
				{/* create delete button that returns the data of the row to props.setDeleteID */}
				<span>
					<button onClick={() => {
						props.setDeleteID(cellProps.row.original.email);
					}}>
					<IconContext.Provider
					value ={{ color: '#FFFFFFFF', size:'25px'}}
					>
					<IoTrashSharp />
					</IconContext.Provider>
					</button>	
				</span>
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