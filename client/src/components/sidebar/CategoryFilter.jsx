import React, {useState, useEffect} from 'react';
import Select from 'react-select';

// fix alignment later on
function CategoryFilter({categories, setFilter}) {
	const [selectedCategory, setCategory] = useState({});

	// set filter to selected category
	useEffect(() => {
		if (Object.keys(selectedCategory).length === 0) return;
		setFilter(selectedCategory);
	}, [selectedCategory]);

	const allCategories = [
		{
			category_ID: 0,
			name: 'All'
		},
		...categories
	]
    return (
        <div className='category-drop'>
				{/* https://react-select.com/styles use this to style the select bar */}
				<Select
					classNamePrefix='select'
					name='category'
					isClearable={false}
					isSearchable={false}
					options={allCategories}
					defaultValue={allCategories[0]}
					getOptionLabel={(option) => option.name}
					getOptionValue={(option) => option.category_ID}
					onChange={setCategory}
				/>
        </div>
    );
}

export default CategoryFilter;