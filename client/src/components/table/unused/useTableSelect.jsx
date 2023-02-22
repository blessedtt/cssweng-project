import React from 'react'

import Checkbox from './Checkbox'

const useTableSelect = (hooks) => {
    hooks.visibleColumns.push(columns => [
        {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
                <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
                <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
        },
        ...columns,
    ])
}

export default useTableSelect;