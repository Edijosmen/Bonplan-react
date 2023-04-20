import React ,{useState} from 'react'
import { Navigate,Outlet,Route } from 'react-router-dom'
export default function Protected({isLogged}) {
    const [signin,setSignin] = useState(localStorage.getItem("Token"));
    if(signin ===null){
        return <Navigate to="/login"></Navigate>
    }else{
        return (
            <Outlet/>
          )
    }
  
}
