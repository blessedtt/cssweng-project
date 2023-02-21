import Table from '../table/Table';
import { COLUMNS } from '../table/columns';

//hook function
function ProductTable({products, isFetching}){
    return <Table columns={COLUMNS} data={products} isFetching={isFetching}/>;
}

export default ProductTable;