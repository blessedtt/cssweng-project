import logo from './logo.svg';
import './App.css';
import { Table } from './components/Table'
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
        <h1>HOME</h1>
      </div>


      
      <main class ="content">
        <Table />
        
      </main>
    </div>
  );
}
export default App;

