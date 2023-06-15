/* eslint-disable */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand(!expand);
  }

  function close() {
    setExpand(false)
  }

  return (
    <nav className={`flex flex-row justify-between border-b-2 border-rose-600 text-slate-800 p-5   ${expand ? "border-none" : null}`}>
      <h1 className='text-3xl font-bold font-mono text-rose-600'>Shopping</h1>

    <div className='lg:hidden block my-1 text-2xl' onClick={handleExpand}>
      {expand ?
        <i className="fa-solid fa-x" style={{color: "#1e293b"}}></i>
        :
        <i className="fa-solid fa-bars" style={{color: "#1e293b"}}></i>
      }
    </div>

    {/* right side navbar */}
      <div className={`lg:block  ${expand ? "absolute top-20 z-10 bg-white w-screen left-0 block border-b-2 border-rose-600" : "hidden"}`}>
        <div className={`flex flex-row gap-5 text-xl  ${expand ? "flex-col items-center py-4" : null}`}>
          <NavLink to="/"><span className='cursor-pointer hover:text-rose-600 hover:font-semibold' onClick={close}>Home</span></NavLink>
          <NavLink to="/products" className='cursor-pointer hover:text-rose-600 hover:font-semibold' onClick={close}>Products</NavLink>
        </div>
      </div>

    </nav>
  )
}
