/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='flex flex-col justify-center items-center h-[64.3vh] gap-5 text-2xl'>
      <h1 className='text-3xl font-bold text-rose-600'>404</h1>
      <p>The page is not available</p>
      <p className='text-xl'>Go back <Link to="shopping" className='py-2 px-3 rounded-lg bg-rose-600 text-white inline'>Home</Link></p>
    </div>
  )
}
