import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
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
          <br />
          **Please allow the camera access**
        </div>
      </div>
    );
  }
}

export default Home;
