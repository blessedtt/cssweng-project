import Table from '../table/Table';
import { COLUMNS } from '../table/columns';

//hook function
function ProductTable({products, isFetching, setProductsToDelete}){
    return <Table columns={COLUMNS} data={products} isFetching={isFetching} setSelectedRowData={setProductsToDelete}/>;
}

export default ProductTable;