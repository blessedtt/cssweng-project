import logo from './logo.svg';
import './App.css';
import { Table } from './components/Table';
import { IoAddCircleOutline, IoPencil } from 'react-icons/io5';
import { IconContext } from 'react-icons';
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
        <span id ="home_text">HOME</span>
        <ul>
          <li>
            <IconContext.Provider
              value ={{ color: 'white', size:'44px'}}
            >
              <IoAddCircleOutline />
            </IconContext.Provider>
          </li>
          <li>
            <IconContext.Provider
              value ={{ color: 'white', size:'44px'}}
            >
                <IoPencil />
            </IconContext.Provider>
          </li>
        </ul>
        
      </div>


      
      <main class ="content">
        <Table />
        
      </main>
    </div>
  );
}
export default App;

