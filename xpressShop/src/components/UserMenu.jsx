import React from 'react'
import { Link } from 'react-router-dom'
import Layout from "./Layout"
function UserMenu() {
  return (
    <>
    <div className='text-center'>

    <div class="list-group">
  <Link to="/dashboard/user/profile" class="list-group-item list-group-item-action hover:bg-sky-500">Profile</Link>
  <Link to="/dashboard/user/orders" class="list-group-item list-group-item-action hover:bg-sky-500">Orders</Link>
  <Link to="/dashboard/user/wishlist" class="list-group-item list-group-item-action hover:bg-sky-500">Wish list</Link>
</div>

    </div>
   
    </>
  )
}

export default UserMenu
