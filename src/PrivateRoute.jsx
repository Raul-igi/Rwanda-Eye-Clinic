import React, { useEffect, useState } from 'react';
import {Navigate,Outlet} from 'react-router-dom';

const PrivateRoute=({isAuthenticated,userRoles,roles})=>{
  const hasRequiredRole = roles.some(role => userRoles.includes(role));
    return(
    (!isAuthenticated || !hasRequiredRole) ?<Navigate to='/'/>:<Outlet/>
    )
}

 export default PrivateRoute; 
