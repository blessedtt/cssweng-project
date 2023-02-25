import './css/App.css';
import { IconContext } from 'react-icons';
import { IoCheckmarkCircleOutline, IoTrashBinSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';


//UI components
import Sidebar from './components/sidebar';

import Popup from './components/Popup';
import ProductTable from './components/products/ProductTable';
import AddProduct from './components/products/addProduct';


//api functions
import ProductAddAPI from './api/ProductAddAPI';
import ProductGetAPI from './api/ProductGetAPI';
import Navbar from './components/navbar';
import CategoryGetAPI from './api/CategoryGetAPI';


const FETCH_URL = 'http://localhost:3001';


function App() {
	//popup states
	const [buttonPopup, setButtonPopup] = useState(false);
	const [successPopup, setSuccessPopup] = useState(false);
	const [deleteSuccessPopup, setDeleteSuccessPopup] = useState(false);

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
		if (productData === undefined) return; //https://stackoverflow.com/questions/53179075/with-useeffect-how-can-i-skip-applying-an-effect-upon-the-initial-render
		ProductAddAPI({productData, setIsUpdating, FETCH_URL})
	}, [productData]);

	//update table when product table is updated (add, delete, edit)
	useEffect(() => {
		if (isUpdating === false) return;
		ProductGetAPI({setProducts, setIsFetching, FETCH_URL});
		setIsUpdating(false);
	}, [isUpdating]);
	

	return(
		<div className="Container">
		<Sidebar />
	  
		<Navbar setButtonPopup={setButtonPopup} setDeleteSuccessPopup={setDeleteSuccessPopup}/>
  
		<main className ="content">
		  <ProductTable products={products} isFetching={isFetching}/>
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
						<button className='ok-btn' onClick={() => {
							setSuccessPopup(false);
							window.location.reload();
							}}>
						Ok
						</button>
					</li>
				</ul>
			</div>
		</Popup>


		<Popup trigger = {deleteSuccessPopup}>
			<div className='delete-success'>
				<ul>
					<li>
					<IconContext.Provider
							value ={{ color: '#DD9D34', size:'44px'}}
							>
							<IoTrashBinSharp />
						</IconContext.Provider>
					</li>
					<li>
						The product has been deleted successfully.
					</li>
					<li>
						<button className='ok-btn' onClick={() => setDeleteSuccessPopup(false)}>
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