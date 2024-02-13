import React from 'react'
import { Link } from 'react-router-dom'
import Layout from "./Layout"
function AdminMenu() {
  return (
    <>
    <div className='text-center'>

    <div class="list-group">
  <Link to="/dashboard/admin/create-category" class="list-group-item list-group-item-action hover:bg-sky-500">Create Category</Link>
  <Link to="/dashboard/admin/create-product" class="list-group-item list-group-item-action hover:bg-sky-500">Create Product</Link>
  <Link to="/dashboard/admin/users" class="list-group-item list-group-item-action hover:bg-sky-500">Users</Link>
</div>

    </div>
   
    </>
  )
}

export default AdminMenu
