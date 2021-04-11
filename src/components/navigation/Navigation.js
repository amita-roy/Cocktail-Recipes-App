import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <div className="navigation-wrapper">
    <nav>
      <NavLink to="/" exact className="nav-link">
        Cocktails
      </NavLink>
    </nav>
  </div>
);

export default Navigation;
