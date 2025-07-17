import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'


const Protected = () => {
  const user=true;
  return user ? <Outlet/> : <Navigate to="/login" replace />
};

export default Protected;
