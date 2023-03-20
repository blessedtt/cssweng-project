import { useState, useEffect } from 'react';
import Table from '../table/Table';
import useUserColumns from './userTableColumns';



function UserTable({users, isFetching, setDeleteID, isDelete}){
	const [rowData, setRowData] = useState([])
	const [userdata, setUserdata] = useState({})

	const columns = useUserColumns({
		setDeleteID,
		setUserdata,
	})

	useEffect(() => {
		if (Object.keys(userdata).length === 0) return;	
		//todo send userdata to parent component
			setUserdata({});
	}, [userdata])

    return (
		isFetching ?
		(<div><h1>Loading...</h1></div>) :
		<Table 
			data={users} 
			columns={columns} 
			setSelectedRowData={setRowData}
			isDelete={isDelete}
		/>
	)
}

export default UserTable;