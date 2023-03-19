import axios from 'axios';

async function CategoryDeleteAPI({categoryIDList, FETCH_URL}){
    if (categoryIDList.length === 0) throw new Error('No categories selected');

    try{
        const result = await axios.delete(FETCH_URL+'category/remove', {
            mode: 'cors',
			withCredentials: true,
            headers:{
                'Content-Type': 'application/json'
            },
            data: {
                '': categoryIDList
            }
        })
        return result.data;
    }
    catch(err){
        throw new Error(err.response.data);
    }
}

export default CategoryDeleteAPI;