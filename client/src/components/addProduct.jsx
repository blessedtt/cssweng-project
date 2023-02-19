import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const AddProduct = (props) => {
    //send data to API to add product
    //fields: pname, brand, price, stock
    const { register, handleSubmit } = useForm();

    //submits data to API
    const onSubmit = (data) => {
        data["category_ID"] = selectedOption["category_ID"];
        console.log(data);
        fetch('http://localhost:3001/product/add', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        }).then((res) => {
            console.log(res);
            return res.json();
        })
        //todo error catching
    }


    //category field of addProduct
    const [selectedOption, setSelectedOption] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategoryAPI();
    }, []);

    const fetchCategoryAPI = () => {
        axios.get('http://localhost:3001/category/get')
        .then(response => {
            console.log(response.data);
            setCategories(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <h5 className='header'>Add New Product</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li>
                <label htmlFor ='product'> Product </label>
                <input type='text' {...register('pname')}></input>
                </li>

                <li>
                <label htmlFor = 'category'>Category</label>
                <>
                    <Select
                        classNamePrefix='select'
                        isClearable={false}
                        isSearchable={false}
                        name='category'
                        options={categories}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.category_ID}
                        onChange={setSelectedOption}
                    />
                </>
                </li>

                <li>
                <label htmlFor = 'brand'>Brand</label>
                <input type='text' {...register('brand')}></input>
                </li>

                <li>
                <label htmlFor = 'sell_price'>Selling Price</label>
                <input type='number' {...register('price')}></input>
                </li>

                <li>
                <label htmlFor = 'stock'>On-hand Stock</label>
                <input type='number' {...register('stock')}></input>
                </li>

            </ul>
            <ul className='popup-btns'>
                <li>
                <button className='back-btn' onClick={() => props.setButtonPopup(false)}>
                    Back
                </button>
                </li>
                <li>
                {/* <input className='submit-btn' type = 'submit' value ='Submit' onSubmit={() => setSuccessPopup(true)}>
                    
                </input> */}
                <button className='submit-btn' onClick={() => props.setSuccessPopup(true)}>
                    Submit
                </button>
                </li>
            </ul>
            </form>
        </div>
    )
}

export default AddProduct;