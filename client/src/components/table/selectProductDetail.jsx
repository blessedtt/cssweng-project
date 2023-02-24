import React from 'react';
import ProductDetails from './productDetails';
import ProductMetrics from './productMetrics';

export default function selectProductDetails(type, productData){
    let component;
    switch(type){
        case 1: component = <ProductDetails product={productData} /> 
        break;
        case 2: component = <ProductMetrics product={productData} /> 
        break;
        default: component = null;
    }
    return component;
}
