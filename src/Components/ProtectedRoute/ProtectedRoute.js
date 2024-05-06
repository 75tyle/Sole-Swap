import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isLogin = localStorage.getItem('isLogin') === 'true';
  
  // If user is already logged in, redirect away from the login page
  if (isLogin) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, render the specified element
  return <Element {...rest} />;
};

export default ProtectedRoute;
