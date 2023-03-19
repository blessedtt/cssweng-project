import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import { TestApp } from './TestApp';

import { AuthProvider } from './auth/authContext';

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
    <StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<TestApp />
			</AuthProvider>
		</BrowserRouter>
    </StrictMode>

);