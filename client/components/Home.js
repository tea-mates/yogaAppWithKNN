import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="homepage">
        <div class="row">
          <div className="card">
            <h3 className="card-title">Demo</h3>
            {/* //placeholder for annimated demo */}
            <img
              id="demogif"
              src="https://cdn.dribbble.com/users/919329/screenshots/2796076/better-yoga3-dribbble.gif"
            />
          </div>
          <div className="card">
            <h3 className="card-title">Practice Mode</h3>
            <Link to="/train">
              <button className="button-warning">Train</button>
            </Link>
          </div>
          <div className="card">
            <h3 className="card-title">Game Mode</h3>
            <Link to="/start">
              <button className="button-warning">Play</button>
            </Link>
          </div>
          **Please allow the camera access**
        </div>
      </div>
    );
  }
}

export default Home;
