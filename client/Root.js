import React from 'react';
import Routes from './routes';
import WelcomePage from './components/WelcomePage';

const Root = () => {
  return (
    <div>
      <main>
        <div>
          {/* placeholder for the navbar component */}
          {/* <Navbar /> */}
          <Routes />
        </div>
      </main>
    </div>
  );
};

export default Root;
