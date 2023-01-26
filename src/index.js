import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom'

import App from './App';
import { ProductsProvider } from './contexts/products.context';
import { UserProvider } from './contexts/user.context';
import { CartProvider } from './contexts/cart.context';

import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </Router>
  </>
);
