import './css/App.css';
import { useEffect, useState } from 'react';


//UI components
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar';
import Popup from './components/Popup';

//popup components
import DeletePopup from './components/popups/deletePopup';
import PopupMessage from './components/popups/popupMessage';

//table components
import Table from './components/table/Table';
import { COLUMNS } from './components/table/columns';

//function components
import AddProductPopup from './components/popups/addProductPopup';

//api functions
import ProductAddAPI from './api/ProductAddAPI';
import ProductGetAPI from './api/ProductGetAPI';
import ProductDeleteAPI from './api/ProductDeleteAPI';
import CategoryGetAPI from './api/CategoryGetAPI';

//url to fetch data from
const FETCH_URL = 'http://localhost:3001';


function App() {
	//popup states
	const [isAdd, setAdd] = useState(false);
	const [deletePopup, setDeletePopup] = useState(false);

	const [isSuccess, setIsSuccess] = useState(false);
	const [statusPopup, setStatusPopup] = useState(false);
	const [message, setMessage] = useState('Loading...');

	//this logic is pretty tightly coupled with the sidebar component, to fix soon
	//delete states
	const [isDelete, setDelete] = useState(false);
	const [isDeleteConfirm, setDeleteConfirm] = useState(false);
	const [productsToDelete, setProductsToDelete] = useState([]);

	//product data to show to table
	const [products, setProducts] = useState([]);

	//category data
	const [categories, setCategories] = useState([]);

	//loading state
	const [isFetching, setIsFetching] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);

	//new product state to be passed to add api
	const [newProductData, setNewProductData] = useState();

	/*************************************
	 *          Popup functions          *
	 *************************************/
	
	const updateDisplay = (message) => {
		setIsUpdating(true);
		setMessage(message);
		setIsSuccess(true);
		setStatusPopup(true);
	}

	const errorPopup = (error) => {
		setMessage(error);
		setIsSuccess(false);
		setStatusPopup(true);
	}

	const closePopup = () => {
		setStatusPopup(false);
		setMessage('Loading...');
		setIsSuccess(false);
	}

	/*************************************
	 * 		    API Call functions       *
	 *************************************/
	const addProduct = async () => {
		try{
			await ProductAddAPI({productData: newProductData, FETCH_URL})
			updateDisplay('Product added successfully!');
		}
		catch(err){
			errorPopup(String(err))
		}
	}

	const deleteProduct = async () => {
		try{
			await ProductDeleteAPI({productIDList: productsToDelete, FETCH_URL});
			updateDisplay('Product deleted successfully!');
		}
		catch(err){
			errorPopup(String(err))
		}
	}

	const fetchData = async () => {
		setIsFetching(true);
		try{	
			const resProducts = await ProductGetAPI({FETCH_URL});
			const resCategories = await CategoryGetAPI({FETCH_URL});

			setProducts(resProducts);
			setCategories(resCategories);
			
		}catch(err){
			setMessage('Error fetching data: '+err);
		}
		setIsFetching(false);
	}

	/*************************************
	 * 		    React Hooks              *
	 *************************************/

	//initialization
	useEffect(() => {
		fetchData();
	}, []);

	//call api and update table when new product is added
	useEffect(() => {
		if (newProductData === undefined) return;
		addProduct();
	}, [newProductData]);

	//update table when product table is updated (add, delete, edit)
	useEffect(() => {
		if (isUpdating === false) return;
		fetchData();
		setIsUpdating(false);
	}, [isUpdating]);

	//display delete buttons
	useEffect(() => {
		if (isDeleteConfirm === false) return;
		//delete products
		deleteProduct();

		//reset delete state
		setDelete(false);
		setDeleteConfirm(false);
	}, [isDeleteConfirm]);


	/*************************************
	 * 		     Render                  *
	 *************************************/
	return(
		<div className="Container">
			<Sidebar isDelete={isDelete} setDelete={setDelete} setDeletePopup={setDeletePopup} />
			<Navbar setAdd={setAdd} setDelete={setDelete} isDelete={isDelete} />

			<main className ="content">
				<Table columns={COLUMNS} data={products} isFetching={isFetching} setSelectedRowData={setProductsToDelete}  isDelete={isDelete}/>
			</main>
	
			<Popup trigger = {isAdd} id="add">
				<AddProductPopup categories={categories} setAdd={setAdd} setProductData={setNewProductData} />
			</Popup>
	
			<Popup trigger = {statusPopup} id="Message">
				<PopupMessage isSuccess={isSuccess} message={message} setClose={closePopup} />
			</Popup>

			<Popup trigger = {deletePopup} id="Delete">
				<DeletePopup setDelete={setDeleteConfirm} setDeletePopup={setDeletePopup} />
			</Popup>
		</div>
	);
}
export default App;