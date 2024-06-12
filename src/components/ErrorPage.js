import React from 'react';

const ErrorPage = () => {
  return (
    <div>
      <h2>Unauthorized Access</h2>
      <p>You need to log in to access this page.</p>
      <a href="/">Go back to login page</a>
    </div>
  );
};

export default ErrorPage;
