import React from 'react'

export default function Footer() {
  return (
    <div className='w-full flex flex-col items-center gap-3 bg-rose-600 p-5 pb-7 overflow-hidden text-white'>
      <h1 className='text-xl font-roboto'>Shopping</h1>

        <p className='w-[20rem]'>An ecommerce website or app where buyers can see a catalog of products or services</p>
      
      <div className='flex flex-row gap-3'>
        <a className='text-xl hover:scale-125' href='https://www.facebook.com/techeyeco'><i className="fa-brands fa-facebook" style={{color: "#ffffff"}}></i></a>
        <a className='text-xl hover:scale-125' href='https://www.linkedin.com/company/techeye-co/'><i className="fa-brands fa-linkedin" style={{color: "#ffffff"}}></i></a>
        <a className='text-xl hover:scale-125' href='https://www.instagram.com/techeyeco/'><i className="fa-brands fa-instagram" style={{color: "#ffffff"}}></i></a>
      </div>
    </div>
  )
}
