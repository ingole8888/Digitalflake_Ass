import React from 'react'
import {useSelector} from "react-redux"
import {Navigate,useLocation} from "react-router-dom"

const RequiredAuth = ({children}) => {
    const isAuth =useSelector((state)=>state.Authreducer.isAuth)
    const location=useLocation()
    if(isAuth){
        return children
    }
    else{
        return <Navigate to="/login" state={{from:location}} replace/>
    }
 
}

export default RequiredAuth