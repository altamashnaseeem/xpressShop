import React from 'react'
import Layout from "../../components/Layout"
import { useAuth } from '../../context/auth'
import UserMenu from '../../components/UserMenu';
function Dashboard() {
  const [auth]=useAuth();
  return (
    <Layout>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
              <div className='col-md-3'>
                <UserMenu></UserMenu>

              </div>
              <div className='col-md-9'>
                <div className="card w-75 p-3">

                  < h2 className='mb-1'>Name:{auth?.user?.name}</ h2>
                  < h2 className='mt-1 mb-1'> Email:{auth?.user?.email}</ h2>
                  < h2 className='mt-1'> Contact:{auth?.user?.phone}</ h2>
                </div>
              </div>
        </div>
       

      </div>
    </Layout>
  )
}

export default Dashboard
