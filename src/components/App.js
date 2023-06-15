import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "../index.css"

//import React Router
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

//import layouts
import RootLayout from "../Layouts/RootLayout";

//importing components
import Home from "./Home";
import ScrollDetector from "./Observer";
import Error from "./Error";

//importing fetch Functions
import fetchSliders from "../Redux/Slider/SliderAsync"
import fetchArrivals from "../Redux/New Arrivals/ArrivalsAsync";
import fetchDiscount from "../Redux/Discount/DiscountAsync"
import Product from "./Product";
import Detail from "./Detail";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route exact index element={<Home />} />
      <Route path="products" element={<Product />} />
      <Route  />
      <Route path="products/:num1/:num2?/:num3?" element={<Detail />} />


      <Route path="*" element={<Error />} />
    </Route>
  )
)



function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchSliders());
    dispatch(fetchArrivals());
    dispatch(fetchDiscount());
    
  }, [dispatch])



  return (
        <RouterProvider router={router} />
  );
}

export default App;
