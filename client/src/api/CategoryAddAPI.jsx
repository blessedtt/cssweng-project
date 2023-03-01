import axios from 'axios';

async function CategoryAddAPI(categoryData, FETCH_URL){
    try{
        const result = await axios.post(FETCH_URL+'/category/add', JSON.stringify(categoryData),{
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    catch(err){
        console.log(err);
        throw new Error(err.response.data);
    }
}

export default CategoryAddAPI;