import { format } from 'date-fns';

export const COLUMNS = [
    {
        Header: 'DATE UPDATED',
        accessor: 'last_updated',
        Cell: ({value}) => {
            return format(new Date(value), "MM/dd/yyyy 'at' h:mm:ss a", 'en-PH')
        }
    },
    {
        Header: 'ITEM NO.',
        accessor: 'product_ID'
    },
    {
        Header: 'BRAND',
        accessor: 'brand'
    },
    {
        Header: 'PRODUCT',
        accessor: 'name'
    },
    {
        Header: 'ON-HAND STOCK',
        accessor: 'stock'
    },
    {
        Header: 'SALES',
        accessor: 'sales'
    },
]