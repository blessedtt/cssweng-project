import React from 'react';
// fix alignment later on
function Category() {
    return (
        <div className='category-drop'>
            <span className = 'category-btn'>
                <span className = 'category-text'>
                    CATEGORY <i className='arrow-down'></i>
                    <div className='category-down'>
                        Testing
                    </div>
                </span>
            </span>
        </div>
    );
}

export default Category;