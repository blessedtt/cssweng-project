import React from 'react';

export default function ProductMetrics({product}){
    return (
        <div className='product'>
            <h1>Product Metrics</h1>
            <br />
            <h4>Name/Description: <span>{product.name}</span> </h4>
            <h4>Selling Price: <span>{product.sell_price}</span></h4>
            <h4>Amount Sold: <span>{product.sales}</span></h4>
            <h4>Revenue: <span>{product.revenue}</span></h4>
            <h4>Average Value: <span>{product.avg_value}</span></h4>
			<h4>Amount Currently Ordered:<span>{product.order_amt}</span> </h4>
        </div>
    )
}