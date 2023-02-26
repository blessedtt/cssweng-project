import React from 'react';
// fix alignment later on
function Category() {
    return (
        <div className='category-drop'>
            <span className = 'category-btn'>
                <span className = 'category-text'>
                    CATEGORY <i className='arrow'></i>
                </span>
                    <ul>
                        
                        <li><button>PAINT</button></li> 
                        <li><button>CONSTRUCTION</button></li>
                        <li><button>STEEL</button></li>
                    </ul>
                    {/* <div className='category-down'>
                        Testing
                    </div> */}
                
            </span>
        </div>
    );
}

export default Category;