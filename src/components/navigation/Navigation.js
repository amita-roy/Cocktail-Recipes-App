import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </nav>
  </div>
);

export default Navigation;
