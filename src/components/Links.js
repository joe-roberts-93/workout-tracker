import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function Links() {
  const { token } = useContext(AuthContext);

  const baseLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
  ];

  if (token) {
    baseLinks.push(
      { to: '/gyms', text: 'Gyms' },
      { to: '/dashboard', text: 'Dashboard' },
      { to: '/workouts', text: 'Your Workouts' },
      { to: '/addworkout', text: 'Add Workout'}
    );
  }

  return (
    <>
      {baseLinks.map((link, index) => (
        <li key={index} className="list-none">
          <Link to={link.to} className="nav-item">{link.text}</Link>
        </li>
      ))}
    </>
  );
};
