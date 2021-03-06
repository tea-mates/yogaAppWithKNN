import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import SelectPose from './components/SelectPose';
import SinglePose from './components/SinglePose';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/start" component={SelectPose} />
      <Route exact path="/Namaste" component={SinglePose} />
      <Route exact path="/Tree" component={SinglePose} />
    </Switch>
  );
};

export default Routes;
