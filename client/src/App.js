import logo from './logo.svg';
import './App.css';
import { Table } from './components/Table';
import { IoAddCircleOutline, IoPencil, IoTrashSharp, } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { Popup } from 'reactjs-popup';
function App() {
  return(
    <div className="Container">
      <div class ="sidebar">
        <span id ="title"><h1>inventory tracker</h1></span>
        <span id = "sidecontent">
          Hello!
        </span>
       
      </div>
    
      <div class ="nav">
       
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
            <Popup trigger = {  
              <button>
              <IconContext.Provider
                  value ={{ color: '#FFFFFFFF', size:'44px'}}
              >
                  <IoPencil />
                </IconContext.Provider>
                </button>
               } >
                <div><h1>TEST</h1>></div>
            </Popup>
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


      
      <main class ="content">
        <Table />
        
      </main>
    </div>
  );
}
export default App;

