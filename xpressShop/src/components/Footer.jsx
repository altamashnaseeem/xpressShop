import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-gray-900 text-white p-5 text-center h-40'>
      <h1 className='text-4xl'>
       Right Reserved &copy; techAlt</h1>
      <p className='mt-3  '>
      <Link to="/about" className='hover:underline hover:text-sky-700'>about</Link> |
       <Link to="/contact" className='hover:underline hover:text-sky-700'> contact</Link> |
       <Link to="/policy" className='hover:underline hover:text-sky-700'> privacy policy</Link>

      </p>
       
    </div>
  )
}

export default Footer
