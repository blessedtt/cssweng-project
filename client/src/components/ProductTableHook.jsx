import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from './Table';

const FETCH_URL = 'http://localhost:3001/product/get';

function ProductTableHook({setProductIDsToDrop}){
    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        fetchUserAPI();
    }, []);

    const fetchUserAPI = () => {
        setIsFetching(true);
        axios.get(FETCH_URL)
        .then(response => {
            console.log(response.data);
            setProducts(response.data);
            setIsFetching(false);
        })
        .catch(error => {
            console.log(error);
            setIsFetching(false);
        });
    }

    return <Table products={products} isFetching={isFetching} setProductIDsToDrop={setProductIDsToDrop}/>;
}

export default ProductTableHook;