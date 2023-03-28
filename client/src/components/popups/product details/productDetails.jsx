import React from 'react';

export default function ProductDetails({product}){
    return (
        <div className='product'>
            <h1>Product Details</h1>
            <br/>
            <h4>Name:<span>{product.name.split(' - ', 1)}</span></h4> 
            <h4>Brand: <span>{product.brand} </span></h4>
			<h4>Description: <span>{product.description}</span></h4>
            <h4>Category: <span>{product.product_category.name}</span></h4>
        </div>
    )
}