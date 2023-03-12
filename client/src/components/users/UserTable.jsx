import Table from '../table/TableAccountManagement';
import { COLUMNS } from '../table/columnsAccountManagement';

//hook function
function UserTable({users, isFetching, setUsersToDelete}){
    return <Table columns={COLUMNS} data={users} isFetching={isFetching} setSelectedRowData={setUsersToDelete}/>;
}

export default UserTable;