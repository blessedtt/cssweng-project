import axios from 'axios';


//API call to add product
function ProductAddAPI({productData, setIsUpdating, FETCH_URL}){
    axios.post(FETCH_URL+'/product/add', JSON.stringify(productData), {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((result) => {
        console.dir(result, {depth: null});
        setIsUpdating(true);
    })
    .catch((err) => {
        console.log(err);
    })

}

export default ProductAddAPI;