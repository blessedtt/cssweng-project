import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const preventNegPosInput = (event) => {
	if (event.key === "-" || event.key === "+") {
		event.preventDefault();
	}
} 

const AddProductPopup = (
    {
        categories,
        setAdd,
        setProductData,
		submitAdd
    }
    ) => {
    //send data to API to add product
    //fields: pname, brand, price, stock, category
    const { register, handleSubmit } = useForm();

    //submits data to API
    const onSubmit = (data) => {
        data['category'] = selectedOption.category_ID;
        console.log(data)
        setProductData(data)
		submitAdd(true)
	}

    //category field of addProduct
    const [selectedOption, setSelectedOption] = useState(null);


    return (
        <div>
            <h5 className='header'>Add New Product</h5>
            <form name ="prodForm" onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li>
                <label htmlFor ='product'> Product </label>
                <input name ='product' type='text' {...register('name')} required></input>
                </li>

				<li>
                <label htmlFor = 'brand' >Brand</label>
                <input name ='brand' type='text' {...register('brand')} required></input>
                </li>

				<li>
					<label htmlFor='description'>Description</label>
					<textarea name='description' type='text' minLength={0} maxLength={150} {...register('description')} ></textarea>
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
                <label htmlFor = 'stock'>On-hand Stock</label>
                <input name ='stock' type='number' min={0} {...register('stock')} required></input>
                </li>

                <li>
                <label htmlFor = 'sell_price' >Selling Price</label>
                <input name ='sell_price' type='number' min={0} {...register('price')} required></input>
                </li>

            </ul>
            <ul className='popup-btns'>
                <li>
                <button className='back-btn' onClick={() => setAdd(false)}>
                    Back
                </button>
                </li>
                <li>
                {/* <input className='submit-btn' type = 'submit' value ='Submit' onSubmit={() => setSuccessPopup(true)}>
                    
                </input> */}
                {/* Add if */}
                {/* <button className='submit-btn' onClick={() => {
                    // if ()
                    setSuccessPopup(true);
                    }}>  */}
                <input className='submit-btn' type = 'submit' value = 'Submit' onClick={() =>{
                    // // let x = 1;
                    // if (x==1){
                    //     setSuccessPopup(false);
                    // }
                    let product1 = document.forms["prodForm"]["products"].value;
                    let brand1 = document.forms["prodForm"]["brand"].value;
                    let sell_price1 = document.forms["prodForm"]["sell_price"].value;
                    let stock1 = document.forms["prodForm"]["stock"].value;
                    if (product1 !=""){
                         setAdd(true);
                    }
                    
                }}>

                </input>
                    
                {/* </button> */}
                </li>
            </ul>
            </form>
        </div>
    )
}

export default AddProductPopup;