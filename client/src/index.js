import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';


const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
    <StrictMode>
        <App />
    </StrictMode>

);