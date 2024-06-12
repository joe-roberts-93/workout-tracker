import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const RegistrationForm = () => {
  const [first_name, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {
      const response = await axios.post('http://localhost:3000/signup', {
        user: {
          first_name,
          surname,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });

      const data = response.data;
      setMessage(`Registration successful! Token: ${data.token}`);
    } catch (error) {
      const errorMessages = error.response?.data?.errors
        ? error.response.data.errors.map(err => err.message).join(', ')
        : error.response?.data?.message || 'Unknown error occurred';
      setMessage(`Registration failed: ${errorMessages}`);
    }
  };

  return (
    <div className="bg-background rounded-lg shadow-lg p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-primary mb-6">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'First Name', value: first_name, onChange: setFirstName },
          { label: 'Surname', value: surname, onChange: setSurname },
          { label: 'Email', value: email, onChange: setEmail, type: 'email' },
          { label: 'Password', value: password, onChange: setPassword, type: 'password' },
          { label: 'Confirm Password', value: passwordConfirmation, onChange: setPasswordConfirmation, type: 'password' },
        ].map(({ label, value, onChange, type = 'text' }, index) => (
          <div key={index}>
            <label htmlFor={label} className="block text-sm font-medium text-gray-700">
              {label}
            </label>
            <input
              type={type}
              id={label}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              required
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-accent focus:border-accent"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-accent hover:bg-opacity-90 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200"
        >
          Register
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-sm ${message.startsWith('Registration failed') ? 'text-warning' : 'text-primary'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default RegistrationForm;
