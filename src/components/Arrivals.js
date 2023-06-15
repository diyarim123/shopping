import React, { useState } from 'react'
import { useSelector } from 'react-redux'


export default function Arrivals() {

  const BASE_URL = "https://fronttask.techeyeco.com";

  const {arrivals_isLoading, arrivals_data, arrivals_error} = useSelector(state => state.arrivals);

  const [page, setPage] = useState(1);

  
  return (
    <div className='mt-16 p-5'>
      <span className='header'>Daily</span>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
        {arrivals_data.length > 0 && arrivals_data.map(arrival => (
          <div className='flex flex-col shadow rounded-md p-5 gap-0'>
            <img className='border-b-2 mb-2' onError={(e) => {e.target.onError=null; e.target.src= `./search.png`}} src={`${BASE_URL}${arrival.attachment}`} alt={arrival.name} />
            <div className='flex flex-col gap-2'>
              <p><span className='font-semibold mr-1'>Brand Name:</span> <span className='font-roboto'>{arrival.brandName}</span></p>
              <p><span className='font-semibold mr-1'>Type:</span> <span className='font-roboto'>{arrival.productTypeName}</span></p>
              <p><span className='font-semibold mr-1'>Price:</span> <span className='font-roboto'>{arrival.price}$</span></p>
              <p><span className='font-semibold mr-1'>Shipping Price:</span> <span className='font-roboto'>{arrival.shippingPrice}$</span></p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
