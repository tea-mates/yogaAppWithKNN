import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AboutUs from './components/AboutUs';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/aboutUs" component={AboutUs} />
    </Switch>
  );
};

export default Routes;
