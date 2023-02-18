import './App.css';
import ProductTableHook from './components/ProductTableHook';
import { IoAddCircleOutline, IoPencil, IoTrashSharp, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import Popup from './components/Popup';
import { useState } from 'react';

import AddProduct from './components/addProduct';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  return(
    <div className="Container">
     
      <div className ="sidebar">
        <span id ="title"><h1>inventory tracker</h1></span>
        <span className = "sidecontent">
          Hello!
        </span>
       
      </div>
    
      <div className ="nav">
       
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
        
        <ProductTableHook />
        
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
export default App;