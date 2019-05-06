import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage} />
    </Switch>
  );
};

export default Routes;
