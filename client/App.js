import React from 'react';
import Camera from './components/Camera.js';
import SelectPose from './components/SelectPose';
import Routes from './routes';
import Home from './components/Home';
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
