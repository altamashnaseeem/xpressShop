import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import  { useState } from "react";

import { useAuth } from '../../context/auth';
import axios from "axios"
import { useNavigate,useLocation} from "react-router-dom"; 

function ForgotPassword() {

    
  const [email,setEmail]=useState("");
  const [newpassword,setNewPassword]=useState("");
  const [answer,setAnswer]=useState("");
  
 

  const navigate=useNavigate()
  

  const handleClick=async (e)=>{
    
      e.preventDefault()
       try{
          const res=await axios.post('http://localhost:5050/api/v1/auth/forgot-password',{email,newpassword,answer},{
            'content-type': 'application/json',
          }) ;
          console.log(res);
            console.log(res.data.success)
          if(res.data.success){

             toast.success(res.data.message);
  
             
             navigate("/login");
          }else{
            toast.error(res.data.message)
            
          }
       }catch(error){
                 console.log(error)
                 toast.error("something went Wrong")
       }
  
      
  }
  return (
    <Layout>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset your Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleClick} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
              
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="newpassword" className="block text-sm font-medium leading-6 text-gray-900">
                  newPassword
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="setpassword"
                  name="setpassword"
                  type="setpassword"
                  value={newpassword}
                  onChange={(e)=>setNewPassword(e.target.value)}
                  autoComplete="current-setpassword"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
                <label htmlFor="newpassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Enter your favorite sport
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="answer"
                  name="answer"
                  type="text"
                  value={answer}
                  onChange={(e)=>setAnswer(e.target.value)}
                  autoComplete="current-answer"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Do not have account?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              signup
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ForgotPassword
