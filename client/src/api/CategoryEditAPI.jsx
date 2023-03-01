import axios from 'axios';

async function CategoryEditAPI({categoryData, FETCH_URL}){
    try{
        let url = FETCH_URL+'/product/'+categoryData.category_ID;
        const result = await axios.put(url, JSON.stringify(categoryData),
        {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return result.data;
    }
    catch(err){
        console.log(err)
        throw new Error(err.response.data);
    }
}

export default CategoryEditAPI;