import axios from 'axios';

//api call to delete product/s
const ProductDeleteAPI = ({productIDList, setIsUpdating, FETCH_URL}) => {
    axios.post(FETCH_URL+'/product/remove', productIDList, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((result) => {
        setIsUpdating(true);
        return result.data;
    })
    .catch((err) => {
        console.log(err);
    })
}

export default ProductDeleteAPI;