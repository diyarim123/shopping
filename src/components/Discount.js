import React from 'react'
import { useSelector } from 'react-redux';

//spinner loading
import { PulseLoader } from 'react-spinners'

export default function Discount() {

  const {discount_isLoading, discount_data, discount_error} = useSelector(state => state.discount);

  const BASE_URL = "https://fronttask.techeyeco.com";

  return (
    <div className='my-10 px-5'>
    <span className='header'>Discounts</span>
    {discount_isLoading ?
      <div className='flex justify-center items-center w-screen h-screen'>
        <PulseLoader size={30} color='#14B8A6' loading={discount_isLoading} />
      </div>
      :    
      <div>
        {discount_error ? null : 
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
            {discount_data.length > 0 && 
              discount_data.map(discount => (
                <div className='shadow p-2 rounded-md' key={discount.id}>
                  <img className='border-b-2 mb-2 w-full h-[22rem] object-cover' src={`${BASE_URL}${discount.attachment}`} alt={discount.name} />
                  <div>
                    <p className='mb-2'><span className='font-semibold mr-1'>Brand Name: </span> <span className='font-roboto'>{discount.brandName}</span></p>
                    <p className='mb-2'><span className='font-semibold mr-1 my-2'>Type: </span> <span className='font-roboto'>{discount.name}</span></p>
                    <p className='text-rose-600 mb-2'><span className='font-semibold mr-1'>Price: </span> <span>{discount.discount > 0 ? <span><span className='line-through'>{discount.price}$ </span> <span className='mx-2'>{`-->`}</span> <span className='font-semibold'>{Math.round(discount.price) - (discount.discount / 100) * (discount.price)}$</span></span> : <span>{discount.price}$ <span className='font-roboto text-red-600 font-semibold ml-2'>%0 Discount!</span></span>}</span></p>
                    <p><span className='font-semibold mr-1'>Shipping Price: </span><span>{discount.shippingPrice}$</span></p>
                  </div>
                </div>
              ))
            }
          </div>
        }
      </div>
    }
    </div>
  )
}
