import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <div className="Container">
      <div class ="sidebar">
        <span id ="title">inventory tracker</span>
        <span id = "sidecontent">
          Hello!
        </span>
       
      </div>
      <div class ="nav">
        test
      </div>


      
      <main class ="content">
        <div class = "outer">
          DATE UPDATED
        </div>
        <div class="inner">
          <div class="date">
            date updated
          </div>
          <div class="item">
            Item No.
          </div>
          <div class="brand">
            brand
          </div>
          <div class="product">
            product
          </div>
          <div class="stock">
            on-hand stock
          </div>
          <div class="status">
            status
          </div>
          <div class="sales">
            sales
          </div>
          <div class="revenue">
            total revenue
          </div>
          <div class="ave">
            ave. value
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;

