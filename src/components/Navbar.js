import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import LoginModal from './LoginModal';
import Links from './Links';
import Swal from 'sweetalert2';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { token, setToken } = useContext(AuthContext);
  console.log(token)
  const navigate = useNavigate();
  const links = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
  ];

  if (token) {
    links.push(
      { to: '/gyms', text: 'Gyms' },
      { to: '/dashboard', text: 'Dashboard' },
      { to: '/workouts', text: 'Your Workouts' },
      { to: '/addworkout', text: 'Add Workout' }
    );
  }

  const logout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out of the application.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        setToken(null);
        fetch('http://localhost:3000/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error logging out:', error));
        navigate('/');
      }
    });
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="/" className="text-white text-xl font-custom">Workout Tracker</a>
            </div>
            <div className="hidden md:flex md:space-x-4 ml-10">
              <Links />
              {token ? (
                <li className="list-none">
                  <button
                    onClick={logout}
                    className="nav-item"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="list-none">
                  <button
                    onClick={handleModalOpen}
                    className="nav-item"
                  >
                    Log in
                  </button>
                </li>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Links />
          {token ? (
            <li className="list-none">
              <button
                onClick={logout}
                className="nav-item block w-full text-left"
              >
                Logout
              </button>
            </li>
          ) : (
            <li className="list-none">
              <button
                onClick={handleModalOpen}
                className="nav-item block w-full text-left"
              >
                Log in
              </button>
            </li>
          )}
        </div>
      </div>
      <LoginModal isOpen={isModalOpen} closeModal={handleModalClose} />
    </nav>
  );
};

export default NavBar;
