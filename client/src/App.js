import './css/App.css';
import { useEffect, useState } from 'react';


//UI components
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar';
import Popup from './components/Popup';

//popup components
import DeletePopup from './components/popups/deletePopup';
import PopupMessage from './components/popups/popupMessage';
import ProductDetailPopup from './components/popups/productDetailPopup';
import ProductEditPopup from './components/popups/productEditPopup';

//table components
import Table from './components/table/Table';

//function components
import AddProductPopup from './components/popups/addProductPopup';

//api functions
import ProductAddAPI from './api/ProductAddAPI';
import ProductGetAPI from './api/ProductGetAPI';
import ProductEditAPI from './api/ProductEditAPI';
import ProductDeleteAPI from './api/ProductDeleteAPI';
import CategoryGetAPI from './api/CategoryGetAPI';

//url to fetch data from
const FETCH_URL = 'http://localhost:3001';


function App() {
	//detail popup states
	const [detailPopup, setDetailPopup] = useState(false);
	const [editPopup, setEditPopup] = useState(false);
	const [detailType, setDetailType] = useState(0);
	const [selectedDetails, setSelectedDetails] = useState({});

	//general popup message states
	const [statusPopup, setStatusPopup] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [message, setMessage] = useState('Loading...');

	//delete states
	const [deletePopup, setDeletePopup] = useState(false);
	const [isDelete, setDelete] = useState(false);
	const [isDeleteConfirm, setDeleteConfirm] = useState(false);
	const [productsToDelete, setProductsToDelete] = useState([]);

	//product data
	const [products, setProducts] = useState([]);

	//category data
	const [categories, setCategories] = useState([]);

	//loading state
	const [isFetching, setIsFetching] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);

	//new product state to be passed to add api
	const [addPopup, setAddPopup] = useState(false);
	const [productData, setProductData] = useState({});

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
			await ProductAddAPI({productData, FETCH_URL})
			updateDisplay('Product added successfully.');
			setProductData({});
		}
		catch(err){
			errorPopup(String(err))
		}
	}

	const deleteProduct = async () => {
		try{
			await ProductDeleteAPI({productIDList: productsToDelete, FETCH_URL});
			updateDisplay('Product deleted successfully.');
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

	const editData = async () => {
		try{
			await ProductEditAPI({productData, FETCH_URL})
			updateDisplay('Product edited successfully.');
			setProductData({});	
		}
		catch(err){
			errorPopup('Error editing data: '+err);
		}
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
		if (Object.keys(productData).length === 0) return;
		addProduct();
	}, [productData]);

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

	//show detail popup
	useEffect(() => {
		if (Object.keys(selectedDetails).length === 0) return;
		setDetailPopup(true);
	}, [selectedDetails]);

	//reset selected details when detail popup is closed
	useEffect(() => {
		if (detailPopup === false)
			setSelectedDetails({});
	}, [detailPopup]);

	/*************************************
	 * 		    	 Render              *
	 *************************************/
	return(
		<div className="Container">
			<Sidebar 
				isDelete={isDelete} 
				setDelete={setDelete} 
				setDeletePopup={setDeletePopup} 
			/>

			<Navbar 
				setAdd={setAddPopup} 
				setDelete={setDelete} 
				isDelete={isDelete} 
			/>

			<main className ="content">
				<Table 
					data={products} 
					isFetching={isFetching} 
					setSelectedRowData={setProductsToDelete}  
					isDelete={isDelete}
					setCurrentSelectedProduct={setSelectedDetails}
					setShowType={setDetailType}
				/>
			</main>
	
			<Popup trigger = {addPopup} id="add">
				<AddProductPopup 
					categories={categories} 
					setAdd={setAddPopup} 
					setProductData={setProductData}
				/>
			</Popup>
	
			<Popup trigger = {statusPopup} id="Message">
				<PopupMessage 
					isSuccess={isSuccess} 
					message={message} 
					setClose={closePopup} 
				/>
			</Popup>

			<Popup trigger = {deletePopup} id="Delete">
				<DeletePopup 
					setDelete={setDeleteConfirm} 
					setDeletePopup={setDeletePopup} 
				/>
			</Popup>

			<Popup trigger = {detailPopup} id="Detail">
				<ProductDetailPopup 
					setDetailPopup={setDetailPopup} 
					setEditPopup={setEditPopup} 
					selectedDetails={selectedDetails} 
					showType={detailType} 
				/>
			</Popup>

		</div>
	);
}
export default App;