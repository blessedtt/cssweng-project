import './css/App.css';
import { IconContext } from 'react-icons';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';


//UI components
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar';
import Popup from './components/Popup';

//table components
import ProductTable from './components/products/ProductTable';
import Table from './components/table/Table';
import { COLUMNS } from './components/table/columns';

//function components
import AddProduct from './components/products/addProduct';


//api functions
import ProductAddAPI from './api/ProductAddAPI';
import ProductGetAPI from './api/ProductGetAPI';
import ProductDeleteAPI from './api/ProductDeleteAPI';
import CategoryGetAPI from './api/CategoryGetAPI';


const FETCH_URL = 'http://localhost:3001';


//some useful references:
//https://stackoverflow.com/questions/53179075/with-useeffect-how-can-i-skip-applying-an-effect-upon-the-initial-render

function App() {
	//popup states
	const [buttonPopup, setButtonPopup] = useState(false);
	const [successPopup, setSuccessPopup] = useState(false);

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
	const [productData, setProductData] = useState();

	//initialization
	useEffect(() => {
		ProductGetAPI({setProducts, setIsFetching, FETCH_URL});
		CategoryGetAPI({setCategories, setIsFetching, FETCH_URL});
	}, []);


	//call api and update table when new product is added
	useEffect(() => {
		if (productData === undefined) return;
		ProductAddAPI({productData, setIsUpdating, FETCH_URL})
	}, [productData]);

	//update table when product table is updated (add, delete, edit)
	useEffect(() => {
		if (isUpdating === false) return;
		ProductGetAPI({setProducts, setIsFetching, FETCH_URL});
		setIsUpdating(false);
	}, [isUpdating]);


	//display products to be deleted
	useEffect(() => {
		console.log(productsToDelete);
	}, [productsToDelete]);

	//display delete buttons
	useEffect(() => {
		if (isDeleteConfirm === false) return;
		console.log(productsToDelete);
		if (productsToDelete.length === 0){
			alert('No products selected. Please select products to delete.');
			setDeleteConfirm(false);
			return;
		}
		//delete products
		ProductDeleteAPI({productsToDelete, setIsUpdating, FETCH_URL});
		setDeleteConfirm(false);
	}, [isDeleteConfirm]);


	return(
		<div className="Container">
		<Sidebar isDelete={isDelete} setDelete={setDelete} setDeleteConfirm={setDeleteConfirm} />
	
		<Navbar setButtonPopup={setButtonPopup} setDelete={setDelete} />
		<main className ="content">
			<Table columns={COLUMNS} data={products} isFetching={isFetching} setSelectedRowData={setProductsToDelete}  isDelete={isDelete}/>;
		</main>
  
		<Popup trigger = {buttonPopup}>
		  <AddProduct categories={categories} setButtonPopup={setButtonPopup} setSuccessPopup={setSuccessPopup} setProductData={setProductData} />
		</Popup>
  
		<Popup trigger = {successPopup}>
			<div className='success'>
				<ul>
					<li>
						<IconContext.Provider
							value ={{ color: '#DD9D34', size:'44px'}}
							>
							<IoCheckmarkCircleOutline />
						</IconContext.Provider>
					</li>
					<li>
						The product has been added successfully.
					</li>
					<li>
						<button className='ok-btn' onClick={() => setSuccessPopup(false)}>
						Ok
						</button>
					</li>
				</ul>
			</div>
		</Popup>
	</div>
	);
}
export default App;