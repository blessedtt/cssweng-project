import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Login from './Login';
import LoginAdmin from './LoginAdmin';
import LoginAdminSec from './LoginAdminSec';

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
    <StrictMode>
        <LoginAdminSec />
    </StrictMode>

);