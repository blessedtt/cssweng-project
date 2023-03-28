import React from 'react';

export const ColumnFilter = ({ column }) => {
	const { filterValue, setFilter } = column;

	return (
		<>
			Search:{' '}
			<input 
				value={ filterValue || ''}
				onChange={(e) => setFilter(e.target.value)}
			/>
		</>
	)
}