// client/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';  // Updated to Navigate for redirection

const Dashboard = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the role from localStorage
    const userRole = localStorage.getItem('role');
    
    // If role is not found, redirect to login
    if (!userRole) {
      setRole(null);
    } else {
      setRole(userRole);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (role === null) {
    return <Navigate to="/login" />;
  }

  // Conditional rendering based on the role
  switch (role) {
    case 'admin':
      return <Navigate to="/admin-dashboard" />;
    case 'teacher':
      return <Navigate to="/teacher-dashboard" />;
    case 'student':
      return <Navigate to="/student-dashboard" />;
    case 'company':
      return <Navigate to="/company-dashboard" />;
    default:
      return <Navigate to="/login" />;
  }
};

export default Dashboard;
