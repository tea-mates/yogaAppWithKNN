import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

class WelcomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <h1>Product Name</h1>
        </div>
        <div>
          {/* //placeholder for annimated demo */}
          <img src="https://cdn.dribbble.com/users/919329/screenshots/2796076/better-yoga3-dribbble.gif" />
        </div>
        <br />
        <div>
          <Link to="/start">
            <button className="button-warning">Start!</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
