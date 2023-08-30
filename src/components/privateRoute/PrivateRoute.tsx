import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../../common/helperFunctions';


const PrivateRoute = ({children}: any) => {
  const isAuth = isAuthenticated();

  console.log(isAuth);
  
  if(isAuth) return <Outlet/> ;

  return <Navigate to='/login'/>
}

export default PrivateRoute