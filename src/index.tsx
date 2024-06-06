import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index/index.scss';
import { StoreContext } from './hooks/useContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<StoreContext>
				<App />
			</StoreContext>
		</BrowserRouter>
	</React.StrictMode>,
);
