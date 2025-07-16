import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const roleToPath = {
  admin: '/admin',
  Gerente: '/gerente',
  Finanaceiro: '/finanaceiro',
  Engenharia: '/engenharia',
  RH: '/rh',
  Comercial: '/comercial',
  Compras: '/compras',
};

const ProtectedRoute = ({ requiredRole }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    // If user is logged in but not the right role, redirect to their dashboard
    const path = roleToPath[user?.role] || '/';
    return <Navigate to={path} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute; 