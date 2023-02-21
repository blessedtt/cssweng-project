import './App.css';
import { IoAddCircleOutline, IoPencil, IoTrashSharp, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import ProductTableHook from './components/ProductTableHook';
import Popup from './client/src/components/Popup';
import AddProduct from './client/src/components/addProduct';


function Delete(){

    const [buttonPopup, setButtonPopup] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);

    const [productIDsToDrop, setProductIDsToDrop] = useState([]);

    const { register, handleSubmit} = useForm();

    const onSubmit = () => {
        console.log(JSON.stringify(productIDsToDrop));
        fetch('http://localhost:3001/product/remove', {
            method: 'POST',
            body: JSON.stringify(productIDsToDrop),
            headers: {
              'Content-Type': 'application/json',
            },
        })
		//todo: error catching
    	}

    return(
      <div className="Container">
      <div class ="sidebar">
        <span id ="title"><h1>inventory tracker</h1></span>
        <span class = "sidecontent">
          <span id ="hello">
            Hello!
          </span>
          <span id = "cancel_btn">
            <button>
              Cancel
            </button>
          </span>
          <span id = "delete_btn">
            <form onSubmit={handleSubmit(onSubmit)}>
            <button>
              Delete
            </button>
            </form>
          </span>
        </span>
      </div>
    
      <div class ="nav">   
        <ul>
          <li id = 'first'>
              HOME
          </li>
          <li>
            <button onClick={() => setButtonPopup(true)}>
                    <IconContext.Provider
                      value ={{ color: '#FFFFFFFF', size:'44px'}}
                    >
                    <IoAddCircleOutline />
                  </IconContext.Provider>
            </button>

           </li>
           <li>
              <button>
                <IconContext.Provider
                  value ={{ color: '#FFFFFFFF', size:'44px'}}
                >
                  <IoPencil />
                </IconContext.Provider>
              </button>
          </li>
          <li>
              <IconContext.Provider
                value ={{ color: '#FFFFFFFF', size:'44px'}}
              >
                <IoTrashSharp />
            </IconContext.Provider>
          </li>
        </ul>
        
      </div>


      
      <main className ="content">
        
        <ProductTableHook setProductIDsToDrop={setProductIDsToDrop}/>
        
      </main>

      <Popup trigger = {buttonPopup}>
        <AddProduct setButtonPopup={setButtonPopup} setSuccessPopup={setSuccessPopup}/>
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
export default Delete;