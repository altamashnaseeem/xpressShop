import React from 'react'
import Layout from '../components/Layout'

function NotFoundPage() {
  return (
    <Layout >
      <div className=' flex justify-center '>
         <div className='mt-44 text-center'>
         <h1 className='text-6xl font-semibold'>
            404
          </h1>
          <p className='text-2xl text-center mt-2'>Oops ! Page Not Found</p>
          <button className='border-solid border-2 border-gray-700 mt-4 rounded p-1 hover:bg-gray-500'> Go Back</button>
             
        
         </div>
          
        


      </div>
        
    </Layout>
  )
}

export default NotFoundPage
