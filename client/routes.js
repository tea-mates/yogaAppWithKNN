import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AboutUs from './components/AboutUs';
import SelectPose from './components/SelectPose';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/start" component={SelectPose} />
    </Switch>
  );
};

export default Routes;
