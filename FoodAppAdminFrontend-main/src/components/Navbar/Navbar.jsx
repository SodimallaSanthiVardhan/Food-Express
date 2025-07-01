import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo2.png';
import { assets } from '../../assets/assets';

const AdminNavbar = () => {
  return (
    <header className="admin-nav-bar">
      <div className="admin-left">
        <img className="admin-logo" src={logo} alt="FoodXpress Logo" />
        <span className="brand-name">FoodXpress</span>
      </div>

      <h2 className="admin-title">Admin Dashboard</h2>

      <div className="admin-right">
        <div className="admin-role">Admin</div>
        <img src={assets.profile_image} alt="Admin" className="admin-profile" />
      </div>
    </header>
  );
};

export default AdminNavbar;
