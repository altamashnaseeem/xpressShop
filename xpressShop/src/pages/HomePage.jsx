import React from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../context/auth'
function HomePage() {
  const [auth,setAuth]=useAuth();

  return (
    <Layout >
        this is ecommerce
        <pre>{JSON.stringify(auth,null,4)}</pre>
        
    </Layout>
  );
};


export default HomePage
