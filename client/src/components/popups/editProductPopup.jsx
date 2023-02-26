import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

//input form for editing a product
export default function EditProductPopup({
	setEdit,
	currentData, 
	setProductData,
	submitEdit,
}) {
	//send data to API to add product
	//fields: pname, brand, price, stock, category
	const { register, handleSubmit } = useForm();

	//submits data to API
	const onSubmit = (data) => {
		console.log(data)
		let newData = currentData;
		newData.sell_price = data.price;
		newData.stock = data.stock;
		newData.sales = data.sales;
		newData.order_amt = data.order_amt;
		setProductData(newData);
		submitEdit(true);	
	}

	//category field of addProduct
	const [selectedOption, setSelectedOption] = useState(null);

	return (
		<div>
			<h5 className='header'>Edit Product</h5>
			<form name ="prodForm" onSubmit={handleSubmit(onSubmit)}>
			<ul>

				<li>
				<label htmlFor = 'sell_price' >Selling Price</label>
				<input name ='sell_price' type='number' {...register('price')}required defaultValue={currentData.sell_price}></input>
				</li>

				<li>
				<label htmlFor = 'stock' >Stock</label>
				<input name ='stock' type='number' {...register('stock')}required defaultValue={currentData.stock}></input>
				</li>

				<li>
				<label htmlFor = 'sales'>Amount Sold: </label>
				<input name ='sales' type='number' {...register('sales')}required defaultValue={currentData.sales}></input>
				</li>

				<li>
				<label htmlFor = 'order'>Amount Currently Ordered: </label>
				<input name ='order' type='number' {...register('order_amt')}required defaultValue={currentData.order_amt}></input>
				</li>
			</ul>
			<button type='submit'>Submit</button>
			<button onClick={() => {setEdit(false)}}>Cancel</button>
			</form>
		</div>
	);

}