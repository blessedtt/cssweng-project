import logo from './logo.svg';
import './App.css';
import { IoAddCircleOutline, IoPencil, IoTrashSharp, } from 'react-icons/io5';
import { IconContext } from 'react-icons';

import ProductTableHook from './components/ProductTableHook';

function App() {
  return(
    <div className="Container">
      <div className ="sidebar">
        <span id ="title"><h1>inventory tracker</h1></span>
        <span id = "sidecontent">
          Hello!
        </span>
       
      </div>
    
      <div className ="nav">
       
        <ul>

          <li id = 'first'>
              HOME
          </li>
          <li>
            <a href=''>
              <IconContext.Provider
                value ={{ color: '#FFFFFFFF', size:'44px'}}
              >
                <IoAddCircleOutline />
              </IconContext.Provider>
             </a>
           </li>
           <li>
            <a href=''>
              <IconContext.Provider
                  value ={{ color: '#FFFFFFFF', size:'44px'}}
              >
                  <IoPencil />
                </IconContext.Provider>
              </a>
            </li>
          <a href=''>
            <li>
              <IconContext.Provider
                value ={{ color: '#FFFFFFFF', size:'44px'}}
              >
                <IoTrashSharp />
            </IconContext.Provider>
            </li>
          </a>
        </ul>
        
      </div>
      
      <main className ="content">
        
        <ProductTableHook />
        
      </main>
    </div>
  );
}
export default App;

