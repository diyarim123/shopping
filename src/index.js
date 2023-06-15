import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

//importing redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


//importing reducers
import SlidersSlice from './Redux/Slider/SlidersSlice';
import ArrivalsSlice from './Redux/New Arrivals/ArrivalsSlice';
import DiscountSlice from './Redux/Discount/DiscountSlice';
import ProductSlice from './Redux/Products/ProductSlice';


const store = configureStore({
  reducer : {
    slider : SlidersSlice,
    arrivals : ArrivalsSlice,
    discount : DiscountSlice,
    product : ProductSlice
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

