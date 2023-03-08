import React from 'react';
const CategorySort = ({categories}) => {
    return (
        <div className='category-sort'>
            {
				categories.map((category) => {
					return (
						<div className='category-sort__item' key={category.categoryID}>
							<input type='checkbox' name={category.categoryID} value={category.categoryName} />
							<label htmlFor={category.categoryID}>{category.categoryName}</label>
						</div>
					)
				})
			}
        </div>
		
    )
}
export default CategorySort;
   