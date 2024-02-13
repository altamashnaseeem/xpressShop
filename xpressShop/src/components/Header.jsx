import React, { useState } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, ShoppingCartIcon, XMarkIcon,UserCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth' 
import toast from "react-hot-toast";
// const navigation = [
//   { name: 'XpressShop', href: '#', current: true },
//   { name: 'Home', href: '#', current: false },
//   { name: 'About', href: '#', current: false },
//   { name: 'Contacts', href: '#', current: false },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Header() {
  const [auth,setAuth]=useAuth()
  const handleLogout=()=>{
    setAuth(
      {
        ...auth,
        user:null,
        token:"",

      }
    )
    localStorage.removeItem('auth')
    toast.success("logout Successfully")
  }
  return (
    
        <Disclosure as="nav" className="bg-gray-800 ">
      {({ open }) => (
        <>
          <div className="  px-4 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  
                  </Link>
                  <Link to="/">
                   <h1 className='text-white text-xl pl-1 italic'>Ecommerce</h1>
                  </Link>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end ">
                
                {/* <div className="flex flex-shrink-0 items-center ">
                  sdsds
                 
                </div> */}
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4  text-white pt-1">
                    {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))} */}
                    <Link to="/">Home</Link>
                    {/* <Link to="/category">Category</Link> */}
                    <Link to="/contact">Contact</Link>
                    

                    
                  
                    
                    



                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className='text-white '>
                   {!auth.user ? (
                    <>
                      <Link to="/login" className='mr-3'>Login</Link>
                 <Link to="/register" className='mr-2'>Register</Link>
                    </>
                   ):(
                    <>
                     <ul className="nav-item dropdown mr-1 ">
          <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {auth?.user?.name}
          </Link>
          <ul className="dropdown-menu">
            <li><Link to={`/dashboard/${auth?.user?.role==1 ? "admin":"user"}`} className="dropdown-item" >Dashboard</Link></li>
            <li><Link onClick={handleLogout} to="/login" className='dropdown-item'>Logout</Link></li>
            
          </ul>
        </ul>
            
                 
                    </>

                   )}
                  </div>
             
                 {/* <button
                  type="button"
                  className=" relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {/* <span className="absolute -inset-1.5" /> */}
                  {/* <span className="sr-only text-white">1</span> */}
                  {/* <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  <span className=" inline-flex absolute items-center rounded-md bg-red-50 px-2 py-1 mb-2 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        0
      </span>
                </button>   */}

                <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true"/>

                      </button> 
                       
                      
                      <span  class=" items-center rounded-md mb-7 -ml-3  bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">3</span>

                  
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */}
                      <UserCircleIcon className='h-8 w-8 text-white ' aria-hidden="true"></UserCircleIcon>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={"asdffff"}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>

    
  )
}

export default Header
