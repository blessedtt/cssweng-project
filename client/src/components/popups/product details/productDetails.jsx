import React from 'react';

export default function ProductDetails({product}){
    return (
        <div>
            <h1>Product Details</h1>
            <br />
            <h4>Name: {product.name.split(' - ', 1)}</h4>
            <h4>Brand: {product.brand}</h4>
			<h4>Description: {product.description}</h4>
            <h4>Category: {product.product_category.name}</h4>
        </div>
    )
}