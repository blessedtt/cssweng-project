export const SearchBar = ({ nameFilter, setNameFilter }) => {

	return (
		<input 
			id='SearchBar'
			type="text" 
			placeholder="Search..." 
			onChange={ (e) => setNameFilter(e.target.value) }
			value={nameFilter}
		/>
	)
}