import './css/App.css';
import { useEffect, useState } from 'react';


//UI components
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar';
import Popup from './components/Popup';

//popup components
import DeletePopup from './components/popups/deleteProductPopup';
import PopupMessage from './components/popups/popupMessage';
import ProductDetailPopup from './components/popups/productDetailPopup';


//table components
import Table from './components/table/Table';

//function components
import AddProductPopup from './components/popups/addProductPopup';
import EditProductPopup from './components/popups/editProductPopup';

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
	const [detailType, setDetailType] = useState(0);
	const [selectedProduct, setSelectedProduct] = useState({});

	//edit product
	const [editPopup, setEditPopup] = useState(false);
	const [EditConfirm, setEditConfirm] = useState(false);

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

	//loading states
	const [isFetching, setIsFetching] = useState(false);	//tells table to display loading
	const [isUpdating, setIsUpdating] = useState(false);	//tells app to fetch upon success
	const [isLoading, setIsLoading] = useState(true);		//tells app when operation is being performed

	//new product state to be passed to add api
	const [addPopup, setAddPopup] = useState(false);
	const [addConfirm, setAddConfirm] = useState(false);

	//general product data to be added/edited
	const [productData, setProductData] = useState({});

	/*************************************
	 *          Popup functions          *
	 *************************************/
	
	const updateDisplay = (message) => {
		setIsUpdating(true);
		setIsLoading(false);
		setMessage(message);
		setIsSuccess(true);
		setStatusPopup(true);
	}

	const errorPopup = (error) => {
		setMessage(error);
		setIsLoading(false);
		setIsSuccess(false);
		setStatusPopup(true);
	}

	const closePopup = () => {
		setStatusPopup(false);
		setIsLoading(false);
		setMessage('Loading...');
		setIsSuccess(false);
	}

	/*************************************
	 * 		    API Call functions       *
	 *************************************/

	const addProduct = async () => {
		setIsLoading(true);
		try{
			await ProductAddAPI({productData, FETCH_URL})
			updateDisplay('Product added successfully.');
			setProductData({});
			setAddConfirm(false);
		}
		catch(err){
			console.log(err);
			errorPopup(String(err))
		}
	}

	const deleteProduct = async () => {
		setIsLoading(true);
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
			setMessage(String(err));
		}
		setIsFetching(false);
	}

	const editProduct = async () => {
		setIsLoading(true);
		try{
			await ProductEditAPI({productData, FETCH_URL})
			updateDisplay('Product edited successfully.');
			setProductData({});	
		}
		catch(err){
			errorPopup(String(err));
		}
	}

	/*************************************
	 * 		    React Hooks              *
	 *************************************/

	//initialization
	useEffect(() => {
		fetchData();
	}, []);

	//update table when product table is updated (add, delete, edit)
	useEffect(() => {
		if (isUpdating === false) return;
		fetchData();
		setIsUpdating(false);
	}, [isUpdating]);

	//add call
	useEffect(() => {
		if (addConfirm === false) return;
		//add products
		addProduct();
		setStatusPopup(true);

		setAddPopup(false);
		setAddConfirm(false);
	}, [addConfirm]);

	//edit call
	useEffect(() => {
		if (EditConfirm === false) return;
		//edit products
		editProduct();
		setStatusPopup(true);

		setEditPopup(false);
		setEditConfirm(false);
	}, [EditConfirm]);

	//delete call
	useEffect(() => {
		if (isDeleteConfirm === false) return;
		//delete products
		deleteProduct();
		setStatusPopup(true);
		//reset delete state
		setDelete(false);
		setDeleteConfirm(false);
	}, [isDeleteConfirm]);

	//show detail popup
	useEffect(() => {
		if (Object.keys(selectedProduct).length === 0) return;
		setDetailPopup(true);
	}, [selectedProduct]);

	//clear selected product data unless edit popup is open
	useEffect(() => {
		if (editPopup === true) return;
		if (detailPopup === true) return;
		setSelectedProduct({});
	}, [editPopup, detailPopup]);

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
					setCurrentSelectedProduct={setSelectedProduct}
					setShowType={setDetailType}
				/>
			</main>
	
			<Popup trigger = {addPopup} id="add">
				<AddProductPopup 
					categories={categories} 
					setAdd={setAddPopup} 
					setProductData={setProductData}
					submitAdd={setAddConfirm}
				/>
			</Popup>
	
			<Popup trigger = {statusPopup} id="Message">
				<PopupMessage 
					isSuccess={isSuccess} 
					message={message} 
					setClose={closePopup} 
					isLoading={isLoading}
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
					selectedDetails={selectedProduct} 
					showType={detailType} 
				/>
			</Popup>

			<Popup trigger = {editPopup} id="Edit">
				<EditProductPopup 
					setEdit={setEditPopup}
					currentData={selectedProduct}
					setProductData={setProductData}
					submitEdit={setEditConfirm}
				/>
			</Popup>

		</div>
	);
}
export default App;