import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Pricing from '../Pricing/Pricing';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/pricing' component={Pricing} />
    </Switch>
  );
};

export default Routes;
