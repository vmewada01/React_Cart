import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthContextWrapper from './Context/AuthContext';
import { ThemeProvider } from './Context/ThemeContext';
import { CartContextProvider } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider>
    <AuthContextWrapper>
      <CartContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartContextProvider>
    </AuthContextWrapper>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
