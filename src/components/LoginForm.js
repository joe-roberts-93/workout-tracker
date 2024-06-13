import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from './AuthContext'; // Import the context


const LoginForm = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setToken } = useContext( AuthContext);
  const {setUserData} = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
            email: email,
            password: password
        }, { withCredentials: true });
      // Assuming your Rails API returns a token upon successful login
      const token = response.data.token;
      const user = response.data.user;
      // Store token in local storage or cookie
      localStorage.setItem('token', token);
      setToken(token);
      localStorage.setItem('user', JSON.stringify(user));
      // Redirect to dashboard or perform other actions upon successful login
      Swal.fire({
        title: 'Login successful',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/dashboard'); // Redirect to dashboard
        }
        closeModal();
      });
    } catch (error) {
      Swal.fire({
        title: 'Invalid email or password',
        icon: 'error',
        confirmButtonText: 'Try again'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-bold text-secondary">Login</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none block w-full px-3 py-2 border border-primary rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="appearance-none block w-full px-3 py-2 border border-primary rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-error focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
