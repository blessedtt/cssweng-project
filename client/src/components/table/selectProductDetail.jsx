import React from 'react';
import ProductDetails from './productDetails';
import ProductMetrics from './productMetrics';

export default function selectProductDetails(type, lastSelected){
    let component;
    switch(type){
        case 1: component = <ProductDetails product={lastSelected} /> 
        break;
        case 2: component = <ProductMetrics product={lastSelected} /> 
        break;
        default: component = null;
    }
    return component;
}
