import React from 'react';
import { Router, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';

const Root = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <Route exact path="/" component={WelcomePage} />
        </main>
      </div>
    </Router>
  );
};

export default Root;
