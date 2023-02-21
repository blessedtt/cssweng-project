import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const AddProduct = (
    {
        categories,
        setButtonPopup,
        setSuccessPopup,
        setProductData
    }
    ) => {
    //send data to API to add product
    //fields: pname, brand, price, stock, category
    const { register, handleSubmit } = useForm();

    //submits data to API
    const onSubmit = (data) => {
        data['category'] = selectedOption.category_ID;
        console.log(data)
        setProductData(data);
    }

    //category field of addProduct
    const [selectedOption, setSelectedOption] = useState(null);


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
                <button className='back-btn' onClick={() => setButtonPopup(false)}>
                    Back
                </button>
                </li>
                <li>
                {/* <input className='submit-btn' type = 'submit' value ='Submit' onSubmit={() => setSuccessPopup(true)}>
                    
                </input> */}
                <button className='submit-btn' onClick={() => setSuccessPopup(true)}>
                    Submit
                </button>
                </li>
            </ul>
            </form>
        </div>
    )
}

export default AddProduct;