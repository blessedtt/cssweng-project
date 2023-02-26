import React from 'react';

export default function ProductMetrics({product}){
    return (
        <div>
            <h1>Product Metrics</h1>
            <br />
            <h4>Name/Description: {product.name}</h4>
            <h4>Selling Price: {product.sell_price}</h4>
            <h4>Amount Sold: {product.sales}</h4>
            <h4>Revenue: {product.revenue}</h4>
            <h4>Average Value: {product.avg_value}</h4>
        </div>
    )
}