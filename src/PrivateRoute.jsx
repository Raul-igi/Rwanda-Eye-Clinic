import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {Navigate,Outlet} from 'react-router-dom';

const PrivateRoute=({isAuthenticated,roles})=>{
  const [hasRequiredRole,setHasRequiredRole]=useState(true)
  useEffect(()=>{
    const roles_ = localStorage.getItem('role')
    const userRoles = JSON.parse(roles_)
    setHasRequiredRole(roles.some(role => userRoles?.includes(role)))
    console.log(hasRequiredRole)
},[hasRequiredRole])
    return(
    (!(isAuthenticated || !!localStorage.getItem('token')) || !hasRequiredRole) ?<Navigate to='/'/>:<Outlet/>
    )
}

const mapStateToProps = state => ({
  isAuthenticated: state.token !== null,
  isLoading: state.loading
})
export default connect(mapStateToProps)(PrivateRoute); 
