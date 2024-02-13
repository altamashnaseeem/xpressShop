import { useState } from 'react'
import Layout from './components/Layout'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/user/Dashboard'
import NotFoundPage from './pages/NotFoundPage'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import {Route,Routes} from "react-router-dom"
import PrivateRoute from './components/Routes/Private'
import AdminRoute from './components/Routes/AdminRoute'
import ForgotPassword from './pages/Auth/ForgotPassword'
import AdminDashboard from './pages/Admin/AdminDashboard'
import CreateCategory from './pages/Admin/CreateCategory'
import CreateProduct from './pages/Admin/CreateProduct'
import Users from './pages/Admin/Users'
import Profile from './pages/user/Profile'
import Orders from './pages/user/Orders'
import Wishlist from './pages/user/Wishlist'
function App() {

  return (
    <> 
      <Routes>
       <Route path='/' element={<HomePage></HomePage>}/>
       <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact ></Contact>}></Route>
       {/* <Route path="/category" element={<Category></Category>}></Route>  */}
       
       <Route path="/register" element={<Register></Register>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
        <Route path="user" element={<Dashboard></Dashboard>}></Route>
         <Route path="user/profile" element={<Profile></Profile>}></Route>
         <Route path="user/orders" element={<Orders></Orders>}></Route>
          <Route path="user/wishlist" element={<Wishlist></Wishlist>}></Route>
        </Route>
        <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
        <Route path="admin" element={<AdminDashboard></AdminDashboard>}></Route>
        <Route path="admin/create-category" element={<CreateCategory></CreateCategory>}></Route>
         <Route path="admin/create-product" element={<CreateProduct></CreateProduct>}></Route>
          <Route path="admin/users" element={<Users></Users>}></Route>
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
      <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
     </Routes>
     


    </>
   
  )
}

export default App
