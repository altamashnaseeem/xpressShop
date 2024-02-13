import React,{useState,useEffect} from 'react'
import {useNavigate,useLocation} from "react-router-dom"
function Spinner({path="login"}) {
    const [count,setCount]=useState(5);
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(()=>{
       const interval=setInterval(()=>{
        setCount((preValue)=> --preValue);
       },1000);
       count===0 && navigate(`/${path}`,{
         state:location.pathname,
       });

       return ()=> clearInterval(interval);
    },[count,navigate,location,path]);
    // 

  return (
    <>
      <div className=" h-screen flex items-center justify-center">
       <div className='text-center'>
       <h1 className=''>redirecting to you in {count} second </h1>
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>

       </div>
</div>
    </>
  )
}

export default Spinner
