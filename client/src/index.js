import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';

import { AuthProvider } from './auth/authContext';

import { AppRouter } from './Router';

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
    <StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		</BrowserRouter>
    </StrictMode>

);