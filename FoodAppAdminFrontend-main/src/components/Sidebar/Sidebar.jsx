import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { assets } from '../../assets/assets'; // Make sure assets.add_icon, etc., are valid

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu size={22} />
      </div>

      <nav className="sidebar-options">
        <NavLink to="/add" className={({ isActive }) => `sidebar-option ${isActive ? 'active' : ''}`}>
          <img src={assets.add_icon} alt="Add" />
          {isOpen && <span>Add Items</span>}
        </NavLink>

        <NavLink to="/list" className={({ isActive }) => `sidebar-option ${isActive ? 'active' : ''}`}>
          <img src={assets.list_icon} alt="List" />
          {isOpen && <span>List Items</span>}
        </NavLink>

        <NavLink to="/orders" className={({ isActive }) => `sidebar-option ${isActive ? 'active' : ''}`}>
          <img src={assets.order_icon} alt="Orders" />
          {isOpen && <span>Orders</span>}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
