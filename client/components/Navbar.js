import React from 'react';
import { Link } from 'react-router-dom';

export const Button = props => {
  return (
    <div>
      <nav>
        <div class="nav-container">
          <div class="nav-logo">
            <img src="../../public/lotus-flower " />
          </div>
          <ul class="nav-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/welcome">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
