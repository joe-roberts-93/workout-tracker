  import React, { useContext, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { AuthContext } from './AuthContext';
  import LoginModal from './LoginModal';
  import Links from './Links';
  import Swal from 'sweetalert2';

  const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        { to: '/addworkout', text: 'Add Workout'}
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

    return (
      <nav className="bg-primary border-b border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex list-none py-2 space-x-4">
              <Links />
              {token ? (
                <li
                  onClick={logout}
                >
                  <button
                  className="nav-item"
                  >
                  Logout
                  </button>
                </li>
              ) : (
                <li
                  onClick={handleModalOpen}
                >
                  <button
                  className='nav-item'
                  >
                  Log in
                  </button>
                </li>
              )}
          </div>
        </div>
      </div>
      <LoginModal isOpen={isModalOpen} closeModal={handleModalClose} />
    </nav>
    );
  };

  export default NavBar;
