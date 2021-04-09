import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const activeStyle = { color: 'Orange' };
  return (
    <div className="navigation-wrapper">
      <nav>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/cocktails" exact activeStyle={activeStyle}>
          Cocktails
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
