import React from 'react';
import Camera from './components/Camera.js';
import SelectPose from './components/SelectPose';
import Routes from './routes';
import WelcomePage from './components/WelcomePage.js';
import { Navbar } from './components/Navbar.js';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
