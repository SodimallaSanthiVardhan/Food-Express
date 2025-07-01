import React, { useState, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import logo from '../../assets/logo2.png';

const Navbar = ({ setshowlogin }) => {
  const { token, setToken, getToatlCartAmount } = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="FoodApp" />
          <span>FoodXpress</span>
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="#menu">Explore</a>
          <a href="#menu">Category</a>
          <Link to="/">Support</Link>
        </div>

        <div className="nav-actions">
          <Link to="/cart" className="nav-cart">
            <i className="ri-shopping-cart-2-fill"></i>
            {getToatlCartAmount() > 0 && <span className="dot" />}
          </Link>

          {!token ? (
            <button onClick={() => setshowlogin(true)} className="nav-btn">Login</button>
          ) : (
            <div className="nav-profile">
              <img src={assets.profile_icon} alt="profile" />
              <ul className="nav-dropdown">
                <Link to="/myorders"><li><i className="ri-archive-2-line"></i> Orders</li></Link>
                <li onClick={handleLogout}><i className="ri-logout-box-r-line"></i> Logout</li>
              </ul>
            </div>
          )}
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
