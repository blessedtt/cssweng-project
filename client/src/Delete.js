import './App.css';
import ProductTableHook from './components/ProductTableHook';
import { IoAddCircleOutline, IoPencil, IoTrashSharp, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import Popup from './components/Popup';
import { useState } from 'react';

import { useForm } from 'react-hook-form';


function Delete(){


    //form validation using react-hook-form
    //todo: place onto seperate file
    const { register, handleSubmit } = useForm();  
    const onSubmit = (data) => {
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

      //todo: add data to database
      //todo: place onto seperate file

    }

    const [buttonPopup, setButtonPopup] = useState(false);
    const [successPopup, setSuccessPopup] = useState(false);
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
            <button>
              Delete
            </button>
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


      
      <main class ="content">
        <ProductTableHook />
        
      </main>

      
      {/* TODO: Please put this in a seperate component file */}
      {/* TODO: include dropdown list of categories */}
      <Popup trigger = {buttonPopup}>
              <h5 className='header'>Add New Product</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ul>
                  <li>
                    <label for ='product'> Product </label>
                    <input type='text' {...register('pname')}></input>
                  </li>

                  <li>
                    <label for = 'brand'>Brand</label>
                    <input type='text' {...register('brand')}></input>
                  </li>

                  <li>
                    <label for = 'sell_price'>Selling Price</label>
                    <input type='number' {...register('price')}></input>
                  </li>

                  <li>
                    <label for = 'stock'>On-hand Stock</label>
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