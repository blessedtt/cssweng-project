import axios from 'axios';

///fetches category data from backend API
function CategoryGetAPI({setCategories, setIsFetching, FETCH_URL}){
    setIsFetching(true);
    axios.get(FETCH_URL+"/category/get")
    .then(response => {
        console.log(response.data);
        setCategories(response.data);
        setIsFetching(false);
    })
    .catch(error => {
        console.log(error);
        setIsFetching(false);
    });
}

export default CategoryGetAPI;