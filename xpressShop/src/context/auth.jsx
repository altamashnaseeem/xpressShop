import {useState,useEffect,useContext,createContext} from "react"

const authContext=createContext();


export const AuthProvider=({children})=>{
    const [auth,setAuth]=useState(
        {
            user:null,
            token:""
        }
    )

    useEffect(()=>{
     const data=localStorage.getItem('auth');
     if(data){
        const parseData=JSON.parse(data);
        setAuth({
            ...auth, 
            user:parseData.user,
            token:parseData.token,
        })
     }


     //eslint-disable-next-line
    },[]);

    return (
        <authContext.Provider value={[auth,setAuth]}>

            {children}
        </authContext.Provider>
    )


}

// custom hooks
export const useAuth=()=>useContext(authContext)