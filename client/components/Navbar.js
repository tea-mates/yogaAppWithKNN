import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = props => {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="nav-logo">
            <img
              className="nav-logo"
              src="https://cdn.xl.thumbs.canstockphoto.com/logo-for-yoga-eps-vector_csp15097480.jpg"
            />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/aboutus">About</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
