import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Import your AuthContext

const Dashboard = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext); // Get the token from context

  useEffect(() => {
    // Check the token from the context (which gets it from the cookie)
    if (!token) {
      navigate('/error', { replace: true }); // Replace to avoid history issues
    }
  }, [token, navigate]); // Add token as a dependency

  return (
    <div>
      <h2>Welcome to your dashboard!</h2>
    </div>
  );
};

export default Dashboard;
