import axios from 'axios';

///fetches data from backend API
function ProductGetAPI({setProducts, setIsFetching, FETCH_URL}){
    setIsFetching(true);
    axios.get(FETCH_URL+"/product/get")
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

export default ProductGetAPI;