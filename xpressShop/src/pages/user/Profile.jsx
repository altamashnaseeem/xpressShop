import React from 'react'
import Layout from '../../components/Layout'
import UserMenu from '../../components/UserMenu'

function Profile() {
  return (
    <Layout>
       <div className='container-fluid m-3 p-3'>
       <div className="row">
        <div className="col-md-3">

          <UserMenu></UserMenu>
        </div>
        <div className="col-md-9">
          <h1>Profile</h1>
        </div>
       </div>
       </div>
    </Layout>
  )
}

export default Profile
