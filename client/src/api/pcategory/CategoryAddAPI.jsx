import axios from 'axios';

async function CategoryAddAPI(categoryData){
    try{
        const result = await axios.post('/category/add', JSON.stringify(categoryData),{
            mode: 'cors',
			withCredentials: true,
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