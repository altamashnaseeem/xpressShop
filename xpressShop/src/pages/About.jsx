import React from 'react'
import Layout from '../components/Layout'
import logo from "../image/about.jpg"
function About() {
  return (
    <Layout >
       {/* <img src={logo} alt="logo" className='' /> */}
       
       <div className='grid grid-rows-3 grid-cols-3 m-28 gap-3'>
           <div className='row-span-3 col-span-2'>
              <img src={logo} alt="logo" className='h-full w-full rounded-lg' />

           </div>
           {/* <div className='flex items-center justify-center font-semibold text-4xl'>about us</div> */}
           <div className='row-span-3 p-2 pt-0 font-sans text-l'>
            <h1 className='text-4xl mt-0 bg-gray-900 text-white pl-2 pb-2 rounded-lg text-center'>About Us</h1>
           XpressShop is dedicated to providing high-quality clothes to our valued customers. Founded in 2023, we have been committed to offering a wide range of clothes that meet the diverse needs of our clientele.

Our mission is to briefly describe your mission/goals, e.g., deliver exceptional products, provide excellent customer service, etc.. We strive to mention any unique selling points or aspects that set your brand apart from competitors, e.g., eco-friendly practices, exclusive designs, fast shipping, etc.

At XpressShop, customer satisfaction is our top priority. We aim to exceed expectations by mention specific ways you cater to your customers, such as 24/7 customer support, easy returns, secure payments, etc..

Thank you for choosing XpressShop!


           </div>
           
       </div> 
    </Layout>
  )
}

export default About
