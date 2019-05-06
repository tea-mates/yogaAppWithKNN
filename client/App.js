import React from 'react';
import Camera from './components/Camera.js';
import SelectPose  from './components/SelectPose';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <SelectPose />
      <Camera />
      <Routes />
    </div>
  );
};

export default App;
