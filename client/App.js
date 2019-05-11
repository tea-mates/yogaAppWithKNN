import React from 'react';
import Routes from './routes';
import { Navbar } from './components/Navbar.js';

const App = () => {
  return (
    <div className="align-center">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
