import './App.css';
import { Table } from './components/Table';
import { IoAddCircleOutline, IoPencil, IoTrashSharp, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import Popup from './components/Popup';
import { useState } from 'react';
function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  return(
    <div className="Container">
     
      <div class ="sidebar">
        <span id ="title"><h1>inventory tracker</h1></span>
        <span class = "sidecontent">
          Hello!
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
        <Table />
        
      </main>

      

      <Popup trigger = {buttonPopup}>
              <h5 className='header'>Add New Product</h5>
              <form>
                <ul>
                  <li>
                    <label for = 'brand'>
                      Brand
                    </label>
                    <input type = 'text' id ='brand'></input>
                  </li>

                  <li>
                    <label for ='product'>
                      Product
                    </label>
                    <input type = 'text' id = 'product'></input>
                  </li>

                  <li>
                    <label for = 'sell-price'>
                      Selling Price
                    </label>
                    <input type = 'number' id = 'sell-price'></input>
                  </li>

                  <li>
                    <label for = 'stock'>
                      On-hand Stock
                    </label>
                    <input type = 'number' id = 'stock'></input>
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
export default App;

