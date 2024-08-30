import React from 'react';
import logo from '../assets/logo.png'; // Ensure the image is in the src/assets directory

const Header: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="My Restaurant Logo" style={{ width: '100px' }} />
      <h1>My Restaurant</h1>
    </header>
  );
};

export default Header;

