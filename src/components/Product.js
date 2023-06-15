/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';




//import MUI React
import { Pagination } from '@mui/material';

//spinner loading
import { PulseLoader } from 'react-spinners'

//import the fetch function
import fetchProduct from "../Redux/Products/ProductAsync"

export default function Product() {


    const BASE_URL = "https://fronttask.techeyeco.com";

    //button
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      })
    }, []);
  

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    };


    // handling the pagination
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(12);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
      const requestPromise = dispatch(fetchProduct({start, end}))

      return () => {
        requestPromise.abort()
      }
    }, [dispatch, start, end])


    const {product_isLoading, product_data, product_error} = useSelector(state => state.product);

    function handlePageChange(event, value) {
      setStart((value * 10) - 8)
      setEnd((value * 10) + 4)
      setPage(value)
      window.scrollTo(0, 0)
    }


  return (
    <div className='mt-5 p-5'>
      <span className='header'>Products</span>
      {product_isLoading ? (
        <div className='flex justify-center items-center w-screen h-screen'>
          <PulseLoader size={30} color='#E11D48' loading={product_isLoading} />
        </div>
      ) : (
        <div>
          {!product_error && (
            <div  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
              {product_data.length > 0 && product_data.map(product => (
                <div className='shadow p-2 rounded-md' key={product.id}>
                    <img
                     className='border-b-2 mb-2 w-full h-[22rem] object-cover'
                     src={`${BASE_URL}${product.attachment}`}
                     onError={(e) => {e.target.onError=null; e.target.src= `/search.png`}}
                     alt={product.name} />
                    <div>
                      <p className='mb-2'>
                        <span className='font-semibold mr-1 my-2'>Type: </span>
                        <span className='font-roboto'>{product.name}</span>
                      </p>
                      <p className='text-rose-600 mb-2'>
                        <span className='font-semibold mr-1'>Price: </span>
                        <span>
                          {product.discount > 0 ? (
                            <span>
                              <span className='line-through'>{product.price}$ </span>
                              <span className='mx-2'>{`-->`}</span>
                              <span className='font-semibold'>
                                {Math.round(product.price) - (product.discount / 100) * (product.price)}$
                              </span>
                            </span>
                          ) : (
                            <span>
                              {product.price}$ 
                              <span className='font-roboto text-red-600 font-semibold ml-2'>
                                %0 Discount!
                              </span>
                            </span>
                          )}
                        </span>
                      </p>
                      <p>
                        <span className='font-semibold mr-1'>Shipping Price: </span>
                        <span>{product.shippingPrice}$</span>
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          )}
          <div className='flex justify-center mx-auto my-6'>
            <Pagination
              count={10}
              page={page}
              onChange={handlePageChange}
              color='secondary'
              variant='outlined'
            />
          </div>

        </div>
      )}

      <div>
        {/*the button*/}
        {showButton && (
          <button className='inline fixed right-8 bottom-32 py-2 px-3 rounded-[100%] bg-rose-800' onClick={scrollToTop}>
            <i className="fa-sharp fa-solid fa-chevron-up m-0 p-0" style={{color: "#ffffff"}}></i>
          </button>
        )}
      </div>

    </div>
  )
}


